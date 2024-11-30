import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: 'HOME', hasSubmenu: false ,link:'/'},
    { label: 'COLLECTIONS', hasSubmenu: true ,link:'/collections'},
    { label: 'CATALOGUE', hasSubmenu: false,link:'/#trending' },
    { label: 'ABOUT US', hasSubmenu: false,link:'/#aboutus' },
    { label: 'CONTACT', hasSubmenu: false ,link:'/#footer'},
  ];
  return (
    <div>
      <div className="flex h-fit md:h-[4vh] w-full items-center justify-center bg-black">
        <h1 className="uppercase tracking-wide text-white md:text-base text-xs p-2 cabin-light ">All kerala Free shipping </h1>
      </div>
      <div className="z-10 flex w-full items-center justify-between bg-[#FFFFFF4D] px-4 md:px-16 py-5 text-black">
        <a href='/' ><Image src="/logo.png" width={100} height={50} alt="Logo" /></a>
        <div className="hidden items-center justify-between gap-8 text-[14px] md:flex">
          <MenuItem label="Home" link="/#"/>
          <MenuItem label="Collections" link="/collections"/>
          <MenuItem label="Catalogue" link="/#trending"/>
          <MenuItem label="About Us" link="/#aboutus"/>
          <MenuItem label="Contact" link="/#footer"/>
        </div>
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-black focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            {menuItems.map((item, index) => (
              <a href= {item.link}key={index} className="py-4 border-b flex justify-between items-center text-black">
                <span>{item.label}</span>
                {item.hasSubmenu && <ChevronRight size={20} />}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ label ,link }: {label: string,link:string}) => (
  <a href={link} className="group relative inline-block hover:cursor-pointer">
    <div className="font-sans uppercase tracking-wider text-[#1c1c1c] transition-all">
      {label}
    </div>
    <span className="absolute left-0 top-6 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </a >
);

export default Navbar;