"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3, CloudFront)", level: 82 },
      { name: "Jenkins", level: 75 },
      { name: "Git/GitHub", level: 88 },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Caffeine Cache", level: 85 },
    ],
  },
]

const tools = [
  "Spring Security",
  "JWT",
  "Razorpay",
  "ChatGPT API",
  "Jira",
  "Postman",
  "Eclipse",
  "Swagger",
  "SendGrid",
  "AWS Parameter Store",
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills progressively
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(
                () => {
                  setAnimatedSkills((prev) => new Set([...prev, skill.name]))
                },
                categoryIndex * 200 + skillIndex * 100,
              )
            })
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={animatedSkills.has(skill.name) ? skill.level : 0} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className={`transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ animationDelay: `${600 + index * 50}ms` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
