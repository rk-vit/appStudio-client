"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"

function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    titleRef.current.classList.add("animate-in")
    setTimeout(() => subtitleRef.current.classList.add("animate-in"), 500)
    setTimeout(() => ctaRef.current.classList.add("animate-in"), 1000)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <h1 ref={titleRef} className="hero-title">
          Welcome to <span className="hero-title-highlight">appStudio</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Empowering developers to create amazing software
        </p>
        <div ref={ctaRef} className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
          <a href="#features" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

