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

export const metadata: Metadata = {
  title: "Fly High!! - eスポーツ大会公式ウェブサイト",
  description: "プレイヤー中心のeスポーツ大会「Fly High!!」の公式ウェブサイト。次回開催情報、大会概要、ギャラリーをご覧いただけます。",
  keywords: "eスポーツ,大会,Fly High,ゲーム,トーナメント,プレイヤー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
