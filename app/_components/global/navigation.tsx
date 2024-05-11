'use client'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react';

const NavigationHeader = () => {
  const headerRef = useRef(null);

  const menuOpener = useRef(null);

  const menuContainer = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let wasScrolled = window.pageYOffset > 20;
    let initialized = false;

    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 20;
      console.log(isScrolled, wasScrolled);

      if (isScrolled !== (wasScrolled && initialized)) {
        initialized = true;
        wasScrolled = isScrolled;
        if (isScrolled) {
          headerRef.current.style.backgroundColor = 'rgba(14,37,23,0.5)';
        } else {
          headerRef.current.style.backgroundColor = 'transparent';
        }
      }
    };


    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {

    window.addEventListener("click", bodyClick)

    return () => {

      window.removeEventListener("click", bodyClick);
    };
    
  }, [open]);

  const bodyClick = (e) => {
    console.log('body click', open);

    if(e.target.closest('button') !== menuOpener.current && e.target.closest('div') !== menuContainer.current){
      if(open){
        setOpen(false);
      }
    }
  }

  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/todos', label: 'Todos' },
    { href: '/blogs', label: 'Blogs' },
  ];

  const openMobileMenu = () => {
    setOpen(!open);
  }

  return (
    <header ref={headerRef} className="p-[20px] fixed z-10 text-white w-full">
      <nav className='container mx-auto px-4'>
        <ul className="md:flex items-center hidden">
          {links.map(({ href, label }) => (
            <li key={href} className="px-4 ">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:flex md:hidden flex justify-end'>
          <button
            ref={menuOpener} 
            onClick={openMobileMenu} 
            className="inline-flex items-center justify-center p-0.5 text-sm text-gray-500 rounded-lg hover:outline-none hover:ring-2 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 fill-current text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"  />
            </svg>
          </button>          
            <div ref={menuContainer} className={`h-[100vh] w-72 bg-primary absolute top-0 left-0 transition-transform ${open ? 'translate-x-0': '-translate-x-full'}`}>
              <ul className="md:flex items-center text-sm">
                <li className='flex justify-center p-4 border-b-2 border-slate-50/50'>
                  <img src="/RI2-removebg-preview.png" alt="logo" className="w-40 h-40" />
                </li>
                {links.map(({ href, label }) => (
                  <li key={href} className="p-4 border-b-2 border-slate-50/50">
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </nav>
    </header>
  )
};
export default NavigationHeader;
