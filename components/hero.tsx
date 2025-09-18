"use client"

import type React from "react"

import { useState } from "react"

export function Hero() {
  const [viewLiveHover, setViewLiveHover] = useState({ x: 0, y: 0, isHovered: false })
  const [githubHover, setGithubHover] = useState({ x: 0, y: 0, isHovered: false })

  const handleMouseMove = (e: React.MouseEvent, setHover: any) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setHover({ x, y, isHovered: true })
  }

  const handleMouseLeave = (setHover: any) => {
    setHover({ x: 0, y: 0, isHovered: false })
  }

  return (
    <section className="py-8">
      <div className="max-w-2xl">
        <div className="mb-8">
          <h1 className="text-[20px] font-medium text-black dark:text-white mb-1">Aditya Porwal</h1>
          <p className="text-[16px] font-normal text-[#4A4A4A] dark:text-gray-400">Full Stack Developer</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aditya%20profile%20photo.jpg-7Wgs65c93atp3BdwzmLGVg00ZGtZH9.jpeg"
                alt="Aditya Porwal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[15px] leading-[1.6] text-[#333] dark:text-gray-300 text-left">
              Focused on creating intuitive and performant web experiences. Bridging the gap between design and
              development.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            className="relative overflow-hidden px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center gap-2"
            onMouseMove={(e) => handleMouseMove(e, setViewLiveHover)}
            onMouseLeave={() => handleMouseLeave(setViewLiveHover)}
          >
            {viewLiveHover.isHovered && (
              <div
                className="absolute w-8 h-8 bg-black dark:bg-white rounded-full pointer-events-none transition-all duration-300"
                style={{
                  left: viewLiveHover.x - 16,
                  top: viewLiveHover.y - 16,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              View Live
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </button>

          <button
            className="relative overflow-hidden px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center gap-2"
            onMouseMove={(e) => handleMouseMove(e, setGithubHover)}
            onMouseLeave={() => handleMouseLeave(setGithubHover)}
          >
            {githubHover.isHovered && (
              <div
                className="absolute w-8 h-8 bg-black dark:bg-white rounded-full pointer-events-none transition-all duration-300"
                style={{
                  left: githubHover.x - 16,
                  top: githubHover.y - 16,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </span>
          </button>
        </div>

        <style jsx>{`
          @media (max-width: 600px) {
            .flex {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
