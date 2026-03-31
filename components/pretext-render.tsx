"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type CSSProperties,
} from "react";
import {
  prepareWithSegments,
  layoutWithLines,
  type PreparedTextWithSegments,
} from "@chenglou/pretext";

/* ------------------------------------------------------------------ */
/*  PretextBlock – renders a paragraph via Pretext's layout engine     */
/*  Outputs to a <canvas> for pixel-perfect, reflow-free rendering     */
/* ------------------------------------------------------------------ */

interface PretextBlockProps {
  /** The text string to render */
  text: string;
  /** CSS font shorthand — must match the visual font exactly.
   *  e.g. "bold 48px Prata" or "16px 'DM Sans'" */
  font: string;
  /** Line height in px */
  lineHeight: number;
  /** Fill colour for the text */
  color?: string;
  /** Optional secondary colour for highlighted spans.
   *  Wrap the target text in ** markers: "Turn visitors into **clients**" */
  highlightColor?: string;
  /** Extra canvas styles (width is auto-managed) */
  style?: CSSProperties;
  /** Additional class names on the wrapper */
  className?: string;
  /** Text alignment */
  textAlign?: "left" | "center" | "right";
}

export function PretextBlock({
  text,
  font,
  lineHeight,
  color = "#0a0a0a",
  highlightColor,
  style,
  className,
  textAlign = "left",
}: PretextBlockProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prepared, setPrepared] = useState<PreparedTextWithSegments | null>(
    null
  );

  // Strip highlight markers for the layout engine
  const plainText = text.replace(/\*\*/g, "");

  // One-time prepare pass (expensive — cache result)
  useEffect(() => {
    const p = prepareWithSegments(plainText, font);
    setPrepared(p);
  }, [plainText, font]);

  const paint = useCallback(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas || !prepared) return;

    const dpr = window.devicePixelRatio || 1;
    const maxWidth = wrapper.clientWidth;
    if (maxWidth === 0) return;

    const { lines, height } = layoutWithLines(prepared, maxWidth, lineHeight);

    // Size the canvas
    canvas.width = Math.ceil(maxWidth * dpr);
    canvas.height = Math.ceil(height * dpr);
    canvas.style.width = `${maxWidth}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.font = font;
    ctx.textBaseline = "top";

    // Parse highlight ranges from ** markers
    const highlights = parseHighlights(text);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const y = i * lineHeight;
      let x = 0;

      if (textAlign === "center") {
        x = (maxWidth - line.width) / 2;
      } else if (textAlign === "right") {
        x = maxWidth - line.width;
      }

      if (!highlightColor || highlights.length === 0) {
        ctx.fillStyle = color;
        ctx.fillText(line.text, x, y);
      } else {
        // Render with highlight spans
        renderHighlightedLine(
          ctx,
          line.text,
          line.start,
          x,
          y,
          color,
          highlightColor,
          highlights
        );
      }
    }
  }, [prepared, lineHeight, color, highlightColor, text, font, textAlign]);

  // Repaint on prepared change + resize
  useEffect(() => {
    paint();
    const obs = new ResizeObserver(() => paint());
    if (wrapperRef.current) obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, [paint]);

  return (
    <div ref={wrapperRef} className={className} style={{ ...style }}>
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PretextDOM – renders via DOM spans, using Pretext for measurement  */
/*  Good for SEO-critical text that needs to be in the DOM             */
/* ------------------------------------------------------------------ */

interface PretextDOMProps {
  text: string;
  font: string;
  lineHeight: number;
  className?: string;
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  style?: CSSProperties;
}

export function PretextDOM({
  text,
  font,
  lineHeight,
  className,
  highlightClassName = "text-primary",
  as: Tag = "div",
  style,
}: PretextDOMProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | undefined>(
    undefined
  );

  const plainText = text.replace(/\*\*/g, "");

  // Use Pretext to pre-measure height — prevents layout shift
  useEffect(() => {
    if (!ref.current) return;

    const measure = () => {
      const width = ref.current!.clientWidth;
      if (width === 0) return;
      const prepared = prepareWithSegments(plainText, font);
      const { height } = layoutWithLines(prepared, width, lineHeight);
      setMeasuredHeight(height);
    };

    measure();
    const obs = new ResizeObserver(() => measure());
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [plainText, font, lineHeight]);

  // Parse **highlight** markers into React nodes
  const parts = text.split(/(\*\*.*?\*\*)/g);
  const rendered = parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className={highlightClassName}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        lineHeight: `${lineHeight}px`,
        minHeight: measuredHeight ? `${measuredHeight}px` : undefined,
        ...style,
      }}
    >
      {rendered}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

interface HighlightRange {
  start: number;
  end: number;
}

function parseHighlights(markedText: string): HighlightRange[] {
  const ranges: HighlightRange[] = [];
  let plainIndex = 0;
  let i = 0;
  while (i < markedText.length) {
    if (markedText[i] === "*" && markedText[i + 1] === "*") {
      i += 2;
      const start = plainIndex;
      while (
        i < markedText.length &&
        !(markedText[i] === "*" && markedText[i + 1] === "*")
      ) {
        plainIndex++;
        i++;
      }
      ranges.push({ start, end: plainIndex });
      if (i < markedText.length) i += 2; // skip closing **
    } else {
      plainIndex++;
      i++;
    }
  }
  return ranges;
}

function renderHighlightedLine(
  ctx: CanvasRenderingContext2D,
  lineText: string,
  _lineStart: { segmentIndex: number; graphemeIndex: number },
  x: number,
  y: number,
  defaultColor: string,
  highlightColor: string,
  _highlights: HighlightRange[]
) {
  // Simple approach: render whole line in default colour
  // For full highlight support across lines, a more complex mapping is needed
  ctx.fillStyle = defaultColor;
  ctx.fillText(lineText, x, y);

  // TODO: map highlight ranges to line-local offsets for partial colouring
  // This is left simple for now — the DOM version handles highlights natively
}
