import { DM_Sans, Prata, Rosario } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Promodrive",
  url: "https://promodrive.in",
  logo: "https://promodrive.in/logo.png",
  description:
    "Digital marketing agency in New Delhi, India specialising in SEO, performance marketing, social media, and web design.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98XX-XXX-XXX",
    contactType: "customer service",
    email: "hello@promodrive.in",
  },
  sameAs: [
    "https://instagram.com/promodrive",
    "https://linkedin.com/company/promodrive",
  ],
};

export const metadata = {
  title: "Digital Marketing Agency in India | Promodrive",
  description:
    "Promodrive is a digital marketing agency in New Delhi, India. We deliver SEO, performance marketing, social media management, and web design services that grow your brand. Schedule a free call today.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
