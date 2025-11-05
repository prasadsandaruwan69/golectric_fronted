import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Rubik_Mono_One } from "next/font/google";

// Load fonts from Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Inter supports many weights
});

const rubikMono = Rubik_Mono_One({
  subsets: ["latin"],
  variable: "--font-rubik-mono",
  display: "swap",
  weight: "400", // ✅ only weight available for Rubik Mono One
});

export const metadata = {
  title: "GoElectric",
  description: "A clean project with src directory and layout.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rubikMono.variable}`}
    >
      {/* Default body uses Inter; boxes or cards can use font-box */}
      <body className="flex flex-col min-h-screen font-inter">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
