import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
export const metadata = {
  title: "CircleSurvivalOnline",
  description: "Game sinh tồn Online– thử thách phản xạ của bạn",
  openGraph: {
    title: "CircleSurvival 3D",
    description: "Tôi vừa chơi CircleSurvival – bạn có vượt được tôi không?",
    url: "https://circle-survival-online-szya.vercel.app",
    siteName: "CircleSurvivalOnline",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};


