"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Sourabh Square Feet",
    description:
      "Discover our extensive collection of premium quality tiles, modern bath fittings, and elegant sanitaryware. Create the perfect space for your home or office.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://www.sourabhsquarefeet.com/",
    githubUrl: "https://github.com/AdityaPorwal14/Sourabh_Square_Feet",
  },
  {
    title: "Library Management System",
    description: "A SQL-based library management system to manage books, users, and borrowing/return transactions.",
    technologies: ["SQL", "Database", "C++"],
    liveUrl: null, // disabled
    githubUrl: "https://github.com/AdityaPorwal14/cpp-basic-projects/blob/main/librarysystem.sql",
  },
]

export function Projects() {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6 text-left text-black dark:text-white"
      >
        Projects
      </motion.h2>

      <div className="space-y-4 max-w-2xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-white dark:hover:bg-gray-900 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-6">
                  {/* Left area: title, description, tech tags stacked vertically */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{project.title}</h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-prose">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                          {techIndex < project.technologies.length - 1 && <span className="ml-1 text-gray-400">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-shrink-0">
                    <button
                      disabled={!project.liveUrl}
                      className={`px-3 py-1.5 text-xs rounded-full transition-all duration-500 flex items-center gap-1.5 ${
                        project.liveUrl
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 cursor-pointer"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50"
                      }`}
                      onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Live
                    </button>

                    <button
                      className="px-3 py-1.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-500 flex items-center gap-1.5 cursor-pointer"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
