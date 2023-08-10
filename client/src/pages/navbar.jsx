import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full p-9 transition-all duration-300 items-center text-white flex top-0 left-0 right-0 h-[60px] ${
        scrolled ? 'navbar scrolled' : 'navbar'
      }`}
      style={{ zIndex: 9999 }}
    >
            
            <div className="w-full flex  justify-between"> 

            <div  className="flex items-center">
                <img src="/logo.png" className="h-[24px] mr-2"/>
            <h2 className='hidden md:block'>Aventon Realty</h2>
            </div>
        
            
            
            <ul className=" hidden md:flex items-center gap-8 mr-[100px]">
                <li className='hover:text-gray-500'>Home</li>
                <li className='hover:text-gray-500'>About</li>
                <li className='hover:text-gray-500'>Profile</li>
                
            
            </ul>

            <div className="flex  ">
                <button className="p-1 w-[120px] h-[44px] font-bold bg-white hover:text-gray-500 text-black items-center rounded-full">Get Started</button>
            </div>

            </div>

         
            
        </div>
    )
}