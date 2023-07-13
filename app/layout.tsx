import "./globals.css";

export const metadata = {
  title: "AXUM商城",
  description: "由AXUM.RS提供的、使用AXUM构建的分布式商城",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="zh-Hans">
      <body className="bg-[#f5f5f5]">{children}</body>
    </html>
  );
}
