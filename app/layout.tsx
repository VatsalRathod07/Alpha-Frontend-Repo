import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Alpha Frontend",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://media.istockphoto.com/id/172401912/photo/grinding-wheat-into-flour.jpg?s=170667a&w=0&k=20&c=qVyvY5LV5KxfrRPW4TtFpW0vC3FJJjeZ1lHfJobr2fQ="
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
