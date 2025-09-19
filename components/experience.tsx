"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Head of Design Department",
    company: "Incubation Cell, SKIT",
    location: "Jaipur, Rajasthan, India · Hybrid",
    duration: "Sep 2025 – Present",
    description:
      "I lead the student design team at our college's Incubation Cell. My team and I help new student startups from SKIT with their designs and creative ideas.",
    skills: ["Adobe Photoshop", "Teamwork", "Graphic Design"],
  },
  {
    title: "Full-stack Developer",
    company: "CodeAlpha",
    location: "Remote",
    duration: "Jul 2025",
    description: "Developed full-stack web applications using modern technologies and frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
]

export function Experience() {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6 text-left text-black"
      >
        Work Experience
      </motion.h2>

      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="relative rounded-xl bg-zinc-50/40 ring-1 ring-zinc-200/50 
          transition-all duration-200 ring-inset hover:bg-zinc-100/50 
          dark:bg-zinc-950/40 dark:ring-zinc-800/45 dark:hover:bg-zinc-900/50 p-6 space-y-6"
        >
          {experiences.map((exp, index) => (
            <div key={index} className={`${index !== experiences.length - 1 ? "pb-6 border-b border-border" : ""}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-base text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-medium">{exp.duration}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full border border-border/50 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
