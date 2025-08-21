"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function About() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GraphQL",
  ]

  const expertise = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Building scalable APIs and server-side applications with Node.js, Python, and cloud services.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native and modern mobile frameworks.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "DevOps & Cloud",
      description:
        "Implementing CI/CD pipelines, containerization, and cloud infrastructure for scalable applications.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience building modern web applications. I
            love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <img
                  src="/developer-headshot.png"
                  alt="John Doe - Full Stack Developer"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4">
                <Code className="h-8 w-8" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading font-bold text-2xl sm:text-3xl">Crafting Digital Experiences</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software development began with a curiosity about how things work behind the scenes. Today,
              I specialize in creating full-stack applications that not only look great but also perform exceptionally
              well.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community through blog posts and mentoring.
            </p>

            <div className="pt-4">
              <h4 className="font-heading font-semibold text-lg mb-4">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{item.icon}</div>
                  <h4 className="font-heading font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
