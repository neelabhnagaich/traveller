'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react';

const NavigationHeader = () => {
  const headerRef  = useRef(null); 

useEffect(() => {
  let wasScrolled = window.pageYOffset > 20;

  const handleScroll = () => {
    const isScrolled = window.pageYOffset > 20;
    if (isScrolled !== wasScrolled) {
      wasScrolled = isScrolled;
      if (isScrolled) {
          console.log("heelo")
        headerRef.current.classList.add("bg-black");
        headerRef.current.style.backgroundColor = 'rgba(0,0,0,0.5)';
      } else {
        headerRef.current.style.backgroundColor = 'transparent';
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/todos', label: 'Todos' },
    { href: '/blogs', label: 'Blogs' },
  ];

  return (
    <header ref={headerRef} className="p-[20px] fixed z-10 text-white w-full">
      <nav className='container mx-auto'>
        <ul className="flex items-center">
          {links.map(({ href, label }) => (
            <li key={href} className="px-4 ">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};
export default NavigationHeader;
