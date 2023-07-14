import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AXUM商城",
  description: "由AXUM.RS提供的、使用AXUM构建的分布式商城",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="zh-Hans">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
