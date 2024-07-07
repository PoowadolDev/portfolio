'use client'

import Link from 'next/link'
export default function Navbar() {
    return (
      <div className="navbar ps-2 pe-2 font-mono fixed bg-base-100 top-0 z-40 Context">
      <div className="flex-1 ">
        <Link className='btn btn-ghost text-2xl md:text-3xl' href="/">PR.</Link>
      </div>
      <div className="hidden md:flex flex-row-reverse space-x-4 space-x-reverse">
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
          
          <li><a className='m-0 p-0' download href='./Poowadol_CV.pdf'><button className="btn btn-outline btn-info">Download CV</button></a></li>
        </ul>
      </div>
      <div className="dropdown dropdown-end md:hidden">
      <div tabIndex={0} role="button" className="btn m-1 text-white">MENU</div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-xs">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/project">Project</Link></li>
          <li><a className='m-0 p-0' download href='./Poowadol_CV.pdf'><button className="btn btn-outline text-xs btn-info">Download CV</button></a></li>
      </ul>
      </div>
    </div>
    );
}