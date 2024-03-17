"use server"

import AutoType from './component/AutoType.js'
import Image from 'next/image'
import profilePic from './img/profile.jpg'

export default async function Home() {

  const text = ["Software Developer", "Test"];
  return (
      <section className='overflow-auto ms-40 mb-80'>
            <div className="grid grid-rows-2">
              <div className="text-4xl font-medium mt-40">
                <h1 className="text-wrap my-5">Hi There!</h1>
                <p className='text-wrap my-5'>I'M <span className='text-sky-400/100'>POOWADOL RUNGTABNAPA</span></p>
                <p className='my-2 text-sky-400/100'><AutoType text="Software Developer"/></p>
              </div>
              <div className='grid grid-cols-2 mt-48 '>
                <div className="ms-20 text-4xl font-medium">
                    <p className='text-wrap ms-20 mb-20'>LET ME <span className='text-sky-400/100'>INTRODUCE</span> MESELF</p>
                      <div className='grid gap-4 text-xl'>
                        <div>
                          <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                        </div>
                        <div className='m-0 p-0'>
                          <p className='m-0 p-0'>I am fluent in classics like C++, Javascript and Go.</p>
                        </div>
                        <div>
                          <p>My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.</p>
                        </div>
                        <div>
                          <p>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
                        </div>
                      </div>
                  </div>

                  <div className='absolute mt-28 me-20 top-1/2 right-2 avatar'>
                    <div className="w-46 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                      <Image
                            src={profilePic}
                            layout='flex'
                            width={500}
                            height={500}
                            alt="Picture of the author"
                          />
                    </div>
                  </div>
              </div>
            </div>
          </section>
    
  );
}
