import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { faHouse,  faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
import Image from 'next/image'
import BG from './img/BG.jpg'
import { Suspense } from "react";
import {Loading} from './loading.js'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Poowadol | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className="text-white">
      <body className={inter.className}>

      <div className="blur-xl brightness-75" style={{
        zIndex: -1, 
        position: 'fixed',
        width: "100%",
        height: "100%",
      }}><Image
      src={BG}
      layout="fill"
      objectFit="cover"
      /></div>
      <div className="navbar font-mono fixed bg-base-100 px-24 top-0 overflow-visible">
        <div className="flex-1">
          <a className="btn btn-ghost text-5xl">PR.</a>
        </div>
        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              {/* <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> */}
              <Link href="/">Home</Link>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> */}
              
            </li>
            <li>
            {/* <FontAwesomeIcon className="" icon={faUser}></FontAwesomeIcon> */}
              
              <Link href="/about">About</Link>
              
            </li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/resume">Resume</Link></li>
          </ul>
        </div>
      </div>
      <Suspense fallback={Loading}></Suspense>
      <div>
        {children}
      </div>
      <footer className="footer footer-center pt-10 py-10 p-4 bg-base-300 text-base-content buttom-100">
        <aside>
          <div className="absolute ps-10 left-0">
            <p>Designed and Developed by Poowadol Rungtabnapa</p>
          </div>
          <div className="absolute pe-10 right-0">
            <p>Copyright © 2024</p>
          </div>

        </aside>
      </footer>
        </body>

    </html>
  );
}
