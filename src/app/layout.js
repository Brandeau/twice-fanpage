import localFont from "next/font/local";
import Header from "./header";
import Footer from "./footer";
import "./ui/globals.css";
import Sidenav from "./ui/sidenav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: '%s | Twice',
    default: 'Twice Fanpage',
  },
  description: 'The unofficial Twice fanpage built with App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
