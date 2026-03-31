import { DM_Sans, Prata, Rosario } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const prata = Prata({
  subsets: ["latin"],
  variable: "--font-heading-serif",
  weight: "400",
});

const rosario = Rosario({
  subsets: ["latin"],
  variable: "--font-rosario",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Promodrive | Digital Marketing Agency",
  description:
    "We build high-converting websites and growth-focused digital marketing systems for modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        dmSans.variable,
        prata.variable,
        rosario.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
