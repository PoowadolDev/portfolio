"use server"

import AutoType from './component/AutoType.js'
import Image from 'next/image'
import profilePic from './img/profile.jpg'
import { Suspense } from 'react';
import { Loading } from './loading.js'

export default async function Home() {

  const text = ["Software Developer", "Test"];
  return (
      <section className='overflow-auto ms-5 mt-20  sm:ms-20 md:ms-40  lg:ms-30 xl:ms-40 2xl:ms-60 font-mono'>
        <div className='flex justify-center'>
          <div className="grid grid-rows-2">
                <div className='grid grid-rows-2 md:grid-rows-2   xl:grid-cols-2'>
                  <div className='relative'>
                    <div className="absolute top bottom-10 md:bottom-0 text-xl mt-40 sm:mt-20 md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl  font-medium md:mt-48 lg:mt-40">
                      <h1 className="text-wrap my-5">Hello There!</h1>
                      <p className='text-wrap my-5'>I'M <span className='text-sky-400/100'>POOWADOL RUNGTABNAPA</span></p>
                      <p className=' text-sky-400/100'><AutoType text="Software Developer"/></p>
                    </div>
                  </div>

                  <div className='relative'>
                      <div className='absolute right-20  sm:right-20  md:right-36 md:top-10 lg:right-24 lg:top-0 xl:right-32 xl:top-32 2xl:right-20 2xl:top-40 avatar'>
                        <div className="w-fit h-fit lg:h-96 md:w-80 md:h-80 lg:w-96 xl:w-fit xl:h-fit rounded-full ring ring-sky-400/100 ring-offset-base-100 ring-offset-2">
                            <Image
                                  src={profilePic}
                                  loader={Loading}
                                  layout='flex'
                                  sizes="50vw"
                                  alt="Picture of the author"
                                />

                        </div>
                      </div>
                    </div>
                </div>
                
                {/* <div className='grid grid-rows-2 xl:grid-cols-1 mt-0 bottom-0 me-10 md:mt-32 md:me-20'> */}
                  <div className="text-xl mt-2 sm:mt-40 md:text-3xl lg:text-4xl font-normal bottom-0 me-10 md:mt-48 md:me-20 mb-20">
                      <p className='text-wrap mb-10 md:mb-20'>LET ME <span className='text-sky-400/100'>INTRODUCE</span> MYSELF</p>
                        <div className='grid gap-4 text-sm md:text-lg xl:text-2xl font-sans'>
                          <div>
                            <p>I'm a passionate Programmer with a strong desire to build innovative. I enjoy tackling complex problems and transforming them into efficient solutions</p>
                          </div>
                          <div className='m-0 p-0'>
                            <p className='m-0 p-0'>I am fluent in classics like Python, Javascript and Go.</p>
                          </div>
                          <div>
                            <p>With experience in building new web applications and a strong foundation in machine learning, This expertise allows me to integrate machine learning models seamlessly into web apps, to fulfill project needs.</p>
                          </div>
                          <div>
                            <p>Whenever possible, I also apply my passion for develop with Node.js and Modern Javascript Library, Frameworks like React.js and Next.js</p>
                          </div>
                        </div>
                    </div>
                {/* </div> */}
              </div>
        </div>

          </section>
    
  );
}
