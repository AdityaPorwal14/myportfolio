import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
