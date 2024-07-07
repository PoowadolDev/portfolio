import { Inter } from "next/font/google";
import "./globals.css";
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
import Image from 'next/image'
import BG from './img/BG.jpg'
import  Navbar  from "./component/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Poowadol | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      
      <body className={inter.className}>
        <div className="blur-xl" style={{
          zIndex: -1, 
          position: 'fixed',
          width: "100%",
          height: "100%",
        }}><Image
        src={BG}
        layout="fill"
        objectFit="cover"
        /></div>
        <Navbar/>
        <div className="">
          <div className="overflow-auto Context">
            {children}
          </div>
        </div>

        <footer className="footer footer-center pt-10 py-10 p-4 bg-base-300 text-base-content text-xs md:text-ms buttom-100 z-40">

            <div className="grid grid-cols-1 md:hidden">
              <div className=" ps-2 left-0">
                <p>Designed and Developed by Poowadol Rungtabnapa</p>
              </div>
              <div className="pe-2 right-0">
                <p>Copyright © 2024</p>
              </div>
            </div>
            <aside className="hidden md:flex">
            <div className="absolute ps-5 left-0">
                <p>Designed and Developed by Poowadol Rungtabnapa</p>
              </div>
              <div className="absolute  pe-5 right-0">
                <p>Copyright © 2024</p>
              </div>
            </aside>




        </footer>
        </body>

    </html>
  );
}
