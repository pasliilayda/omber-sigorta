import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omber Sigorta | KKTC Sigorta, Kasko ve Navlun Sigortası",
  description:
    "Omber Sigorta; KKTC’de trafik sigortası, kasko, konut, sağlık, seyahat, iş yeri ve navlun sigortası alanlarında hızlı ve güvenilir sigorta danışmanlığı sunar.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XVFQ8EHWR3"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XVFQ8EHWR3');
    `,
          }}
        />
      </body>
    </html>
  );
}
