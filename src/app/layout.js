import { Geist, Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});
export const metadata = {
  title: "Twenty Square",
  description: "A wonderful way to Transform your walls.",
  openGraph: {
    title: "Twenty Square",
    description: "A wonderful way to Transform your walls.",
    images: ["/Home.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}