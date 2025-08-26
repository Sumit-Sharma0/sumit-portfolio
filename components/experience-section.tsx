"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and achievements</p>
          </div>

          <Card
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Software Developer</h3>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4" />
                    <span>KSquaretech Consulting</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>June 2023 – Present</span>
                  </div>
                </div>
                <Badge variant="secondary" className="self-start">
                  Current Role
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Contributed to multiple enterprise-level projects following Agile methodology, using Jira for
                      sprint planning, task tracking, and collaboration.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Developed and maintained scalable microservices-based applications using Spring Boot and Java.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Integrated third-party logistics APIs such as Unolo and built internal tools with ChatGPT AI for
                      automated parsing and intelligent response generation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Designed and implemented a local caching solution using Caffeine to store frequently accessed
                      employee data, reducing database query times by 60%.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Integrated Razorpay Payment Gateway in Spring Boot backend, implementing secure order creation,
                      auto-capture payments, and HMAC-based signature verification.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h3
              className={`text-xl font-semibold mb-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Education & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Bachelor of Technology</h4>
                  <p className="text-muted-foreground mb-2">Rajasthan Technical University</p>
                  <p className="text-sm text-muted-foreground">July 2017 – August 2021</p>
                </CardContent>
              </Card>
              <Card
                className={`transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Java Training</h4>
                  <p className="text-muted-foreground mb-2">Mind-Script</p>
                  <p className="text-sm text-muted-foreground">August 2021 – February 2022</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
