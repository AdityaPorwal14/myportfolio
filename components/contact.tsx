"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-bold mb-6 dark:text-white"
      >
        Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground mb-6"
      >
        Feel free to contact me at{" "}
        <a href="mailto:aadityporwal96@gmail.com" className="underline hover:text-primary transition-colors">
          aadityporwal96@gmail.com
        </a>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-3 flex-wrap"
      >
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-blue-500/20 hover:text-blue-700 hover:border-blue-300 dark:hover:bg-blue-500/20 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all duration-500 bg-transparent"
          asChild
        >
          <a href="https://www.linkedin.com/in/adityaporwal14/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 text-blue-600" />
            LinkedIn
          </a>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-gray-900/20 hover:text-gray-900 hover:border-gray-400 dark:hover:bg-gray-100/20 dark:hover:text-gray-100 dark:hover:border-gray-300 transition-all duration-500 bg-transparent"
          asChild
        >
          <a href="https://github.com/AdityaPorwal14" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-red-500/20 hover:text-red-700 hover:border-red-300 dark:hover:bg-red-500/20 dark:hover:text-red-400 dark:hover:border-red-400 transition-all duration-500 bg-transparent"
          asChild
        >
          <a href="https://leetcode.com/u/AdityaPorwal14/" target="_blank" rel="noopener noreferrer">
            <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
            LeetCode
          </a>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-green-500/20 hover:text-green-700 hover:border-green-300 dark:hover:bg-green-500/20 dark:hover:text-green-400 dark:hover:border-green-400 transition-all duration-500 bg-transparent"
          asChild
        >
          <a href="mailto:aadityporwal96@gmail.com">
            <Mail className="w-4 h-4 text-green-600" />
            Email
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12 pt-6 border-t border-border"
      >
        <p className="text-xs text-muted-foreground">In construction.</p>
      </motion.div>
    </section>
  )
}
