import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fly High!! - eスポーツ大会公式ウェブサイト",
  description: "プレイヤー中心のeスポーツ大会「Fly High!!」の公式ウェブサイト。次回開催情報、大会概要、ギャラリーをご覧いただけます。",
  keywords: "eスポーツ,大会,Fly High,ゲーム,トーナメント,プレイヤー",
  openGraph: {
    title: "Fly High!! - eスポーツ大会",
    description: "プレイヤー中心のeスポーツ大会「Fly High!!」",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
