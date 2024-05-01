'use client'

import { useEffect, useRef } from "react"

export default function HeroSection() {

  const bgRef = useRef(null);
  const heroRef = useRef(null);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll)
        } else {
          window.removeEventListener('scroll', handleScroll)
        }
      })
    })

    observer.observe(heroRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div ref={heroRef} className="hero-section h-svh relative text-white" style={{ height: '100svh' }}>
      <div className="hero-section_bg h-full w-full" >
        <video ref={bgRef} className="object-cover w-full h-full" src='../bg_video.mp4' autoPlay loop muted></video>
      </div>
      <div className="overlay absolute h-full w-full bg-black bg-opacity-50 top-0 left-0">
      </div>
      <div className="hero-section__info absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-2xl">Connecting clients with the world through tailor-made itineraries</h3>
      </div>

      <div className="hero-section__info absolute top-[80svh] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-base font-semibold tracking-widest">ADVENTURE AWAITS</h3>
      </div>
      <a href="#/" className="hero-section__info absolute arrow-down top-[80svh]">
          <img src="/down-arrow-svgrepo-com.svg" alt="arrow Down" className="w-28 h-28 text-white" /> 
      </a>
    </div>
  )
}
