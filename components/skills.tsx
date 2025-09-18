"use client"

import { motion } from "framer-motion"

const skills = [
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-300 filter grayscale group-hover:grayscale-0">
        <path
          fill="#E34F26"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-300 filter grayscale group-hover:grayscale-0">
        <path
          fill="#1572B6"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center transition-all duration-300 filter grayscale group-hover:grayscale-0">
        <span className="text-black font-bold text-xs">JS</span>
      </div>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-300 filter grayscale group-hover:grayscale-0">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <path
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
        />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-300 filter grayscale group-hover:grayscale-0">
        <path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
        <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
        <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
        <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
        <path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe-Photoshop-Logo-JxoI5ZszWRso6rlsINjcYhZ9yHPIrQ.png"
        alt="Adobe Photoshop"
        className="w-12 h-12 transition-all duration-300 filter grayscale group-hover:grayscale-0 object-contain"
      />
    ),
  },
]

export function Skills() {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6 text-left text-black dark:text-white"
      >
        Skills
      </motion.h2>

      <div className="max-w-2xl">
        <div className="flex flex-wrap gap-4 justify-start">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 flex flex-col items-center justify-center gap-3 transition-all duration-300 p-4">
                <div className="flex-shrink-0">{skill.icon}</div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
