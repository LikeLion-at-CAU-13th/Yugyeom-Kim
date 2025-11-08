import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "맛있는 레시피",
  description: "다양한 음식 레시피를 만나보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${ playfair.variable } ${ notoSans.variable } antialiased`}>
        <header className="header">
          <h1 className="header-title">🍳 맛있는 레시피</h1>
          <p className="header-subtitle">세계 각국의 요리를 만나보세요</p>
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>Unsplash API를 활용한 이미지 제공</p>
        </footer>
      </body>
    </html>
  );
}
