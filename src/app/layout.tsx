import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InsideEdge | Full-Service Creative Agency",
  description:
    "InsideEdge is a full-service creative agency offering social media management, graphic design, web development, app development, and professional video editing for modern brands.",
  keywords: [
    "social media management",
    "graphic design agency",
    "web development",
    "app development",
    "video editing",
    "short form content",
    "reels editing",
    "digital agency",
    "brand content",
  ],
  openGraph: {
    title: "InsideEdge | Full-Service Creative Agency",
    description:
      "Social Media · Graphic Design · Web Dev · App Dev · Video Editing",
    type: "website",
    url: "https://insideedge.info/",
  },
  twitter: {
    card: "summary_large_image",
    title: "InsideEdge | Full-Service Creative Agency",
    description:
      "Social Media · Graphic Design · Web Dev · App Dev · Video Editing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '966296406185417');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=966296406185417&ev=PageView&noscript=1" />',
          }}
        />
      </body>
    </html>
  );
}