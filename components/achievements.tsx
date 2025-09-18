"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    title: "First Place, E-Cell Logo Design Competition",
    issuer: "E-Cell topaz SKIT",
    date: "Oct 2024",
    description: "Won first place in the logo design competition organized by the Entrepreneurship Cell at SKIT.",
    institution: "Swami Keshvanand Institute of Technology, Jaipur",
    image: "/logo-design-competition-winner-certificate.jpg",
  },
  {
    title: "Academic Excellence & Achievements",
    issuer: "Principle BTTI",
    date: "Feb 2023",
    description: "Recognized for outstanding academic performance and achievements.",
    institution: "Birla Technical Training Institute, Pilani",
    image: "/academic-excellence-certificate.jpg",
  },
]

export function Achievements() {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-bold mb-8"
      >
        Small Wins
      </motion.h2>

      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="flex">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 flex-1">
                  <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Issued by {achievement.issuer} · {achievement.date}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
