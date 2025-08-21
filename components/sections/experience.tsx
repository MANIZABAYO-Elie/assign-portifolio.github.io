"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      type: "work" as const,
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Built the core platform from scratch, implemented CI/CD pipelines, and collaborated with design team to create intuitive user experiences.",
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
      type: "work" as const,
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Developed responsive websites and web applications for various clients. Optimized performance and implemented modern frontend practices.",
      technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"],
      type: "work" as const,
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Studio",
      location: "Austin, TX",
      period: "2018 - 2019",
      description:
        "Started my professional journey building websites and learning modern development practices. Contributed to multiple client projects.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "work" as const,
    },
  ]

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "University of Technology",
      location: "California, USA",
      period: "2014 - 2018",
      description:
        "Graduated Magna Cum Laude. Focused on software engineering, algorithms, and database systems. Active member of the Computer Science Club.",
      technologies: ["Java", "C++", "Python", "Data Structures", "Algorithms"],
      type: "education" as const,
    },
    {
      title: "Full Stack Web Development Bootcamp",
      company: "CodeAcademy Pro",
      location: "Online",
      period: "2017 - 2018",
      description:
        "Intensive 6-month program covering modern web development technologies and best practices. Built multiple full-stack projects.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
      type: "education" as const,
    },
  ]

  const allExperience = [...workExperience, ...education].sort((a, b) => {
    const yearA = Number.parseInt(a.period.split(" - ")[1] === "Present" ? "2024" : a.period.split(" - ")[1])
    const yearB = Number.parseInt(b.period.split(" - ")[1] === "Present" ? "2024" : b.period.split(" - ")[1])
    return yearB - yearA
  })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey and educational background that shaped my expertise in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {allExperience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />

                <div className="md:ml-16">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 mb-2">
                          {item.type === "work" ? (
                            <Briefcase className="h-5 w-5 text-primary" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-primary" />
                          )}
                          <Badge variant={item.type === "work" ? "default" : "secondary"} className="text-xs">
                            {item.type === "work" ? "Work" : "Education"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-xl">{item.title}</h3>
                      <p className="text-primary font-semibold">{item.company}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
