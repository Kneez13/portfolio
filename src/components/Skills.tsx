import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Shield, Globe, Briefcase, Heart, Users } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Support",
      icon: Cpu,
      skills: ["Hardware Troubleshooting", "Software Installation", "Network Configuration", "Remote Desktop Support", "System Diagnostics"]
    },
    {
      title: "Operating Systems",
      icon: Globe,
      skills: ["Windows 10/11", "macOS", "Linux (Ubuntu, CentOS)", "Windows Server", "Mobile OS (iOS, Android)"]
    },
    {
      title: "Networking",
      icon: Shield,
      skills: ["TCP/IP", "DNS/DHCP", "VPN Configuration", "Firewall Management", "Wi-Fi Setup", "Network Security"]
    },
    {
      title: "Productivity Tools",
      icon: Briefcase,
      skills: ["Microsoft Office 365", "Google Workspace", "Active Directory", "VMware", "Citrix", "Ticketing Systems"]
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["Antivirus Management", "Data Backup & Recovery", "Security Best Practices", "User Access Control", "Compliance"]
    },
    {
      title: "Customer Service",
      icon: Users,
      skills: ["Problem Solving", "Communication", "Documentation", "Training", "Time Management", "Prioritization"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive skill set covering all aspects of IT support and system administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card 
                key={index} 
                className="card-hover h-full border-primary/10 bg-gradient-to-br from-card to-card/50 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 border-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
