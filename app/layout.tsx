import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import CartContextProvider from "../contexts/cart";
import UserContextProvider from "@/contexts/user";
import UserProvider from "@/providers/user";

export const metadata = {
  title: "E.com",
  description: "This is E.com app",
};
const PoppinFont = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PoppinFont.className}>
        <UserProvider>
          <UserContextProvider>
            <CartContextProvider>
              <Navbar />
              <div className="pt-20 pb-20">{children}</div>
              <Footer />
            </CartContextProvider>
          </UserContextProvider>
        </UserProvider>
      </body>
    </html>
  );
}
