'use client'

import { useState, useRef, useEffect } from 'react'
import GlowButton from './ui/GlowButton'

interface VideoIntroProps {
  children: React.ReactNode
}

export default function VideoIntro({ children }: VideoIntroProps) {
  const [showIntro, setShowIntro] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Check if user has already seen the intro this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) {
      setShowIntro(false)
      setShowContent(true)
    }
  }, [])

  const handleEnter = () => {
    if (videoRef.current) {
      setIsPlaying(true)
      videoRef.current.play()
    }
  }

  const handleVideoEnd = () => {
    // Start fade transition
    setIsFading(true)
    
    // After fade completes, show the main content
    setTimeout(() => {
      setShowIntro(false)
      setShowContent(true)
      sessionStorage.setItem('hasSeenIntro', 'true')
    }, 1000)
  }

  // If intro is done, just show children
  if (!showIntro && showContent) {
    return <>{children}</>
  }

  return (
    <>
      {/* Video Intro Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
          isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/Wall_Opens_Camera_Zooms_to_Black.mp4"
          playsInline
          muted
          onEnded={handleVideoEnd}
        />
        
        {/* Dark overlay for better button visibility (before playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40" />
        )}
        
        {/* Enter Button - only show before video starts */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-end justify-center pb-20 sm:pb-32">
            <GlowButton onClick={handleEnter}>
              ENTER
            </GlowButton>
          </div>
        )}
        
        {/* Fade to black overlay at the end */}
        {isFading && (
          <div className="absolute inset-0 bg-black animate-fadeIn" />
        )}
      </div>
      
      {/* Main content (hidden behind intro) */}
      <div className={showContent ? 'opacity-100' : 'opacity-0'}>
        {children}
      </div>
    </>
  )
}
