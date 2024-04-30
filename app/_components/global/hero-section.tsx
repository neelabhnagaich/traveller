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
      <div className="hero-section__info absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-2xl">Connecting clients with the world through tailor-made itineraries</h3>
      </div>

      <div className="hero-section__info absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-lg font-semibold tracking-widest">ADVENTURE AWAITS</h3>
      </div>
      <a href="#/" className="hero-section__info absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="m461.49,248.51,394,181a12,12,0,0,0-17,17l46.52,46.51h60a12,12,0,0,0,0,24h424.53l377,316a12,12,0,0,0,17,17l67.5-67.5a12,12,0,0,0,461.49,248.51z"></path>
          </svg>
        </div>
      </a>
    </div>
  )
}
