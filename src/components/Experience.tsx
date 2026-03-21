import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior IT Support Engineer",
      company: "Tech Solutions Inc.",
      location: "City, State",
      period: "2021 - Present",
      description: [
        "Provide advanced technical support to 500+ employees across multiple locations",
        "Manage and maintain Windows Server infrastructure and Active Directory",
        "Implement and troubleshoot network security measures and VPN connections",
        "Train junior IT staff and develop comprehensive documentation",
        "Reduce ticket resolution time by 40% through process optimization"
      ],
      technologies: ["Windows Server", "Active Directory", "VMware", "Office 365", "VPN"],
      highlight: true
    },
    {
      title: "IT Support Specialist",
      company: "Digital Services Corp",
      location: "City, State", 
      period: "2018 - 2021",
      description: [
        "Provided tier-2 technical support for 300+ end users",
        "Managed hardware and software inventory lifecycle",
        "Configured and maintained network devices and firewalls",
        "Conducted regular system backups and disaster recovery testing",
        "Assisted in cloud migration projects to Azure"
      ],
      technologies: ["Windows 10/11", "Office 365", "Azure", "Cisco", "Backup Solutions"],
      highlight: false
    },
    {
      title: "Help Desk Technician",
      company: "StartUp Technologies",
      location: "City, State",
      period: "2016 - 2018",
      description: [
        "Provided first-line technical support to 150+ employees",
        "Resolved hardware and software issues via phone, email, and in-person",
        "Set up new employee workstations and user accounts",
        "Maintained IT asset inventory and documentation",
        "Achieved 95% customer satisfaction rating"
      ],
      technologies: ["Windows", "macOS", "Office 365", "Active Directory", "Remote Support"],
      highlight: false
    }
  ]

  return (
    <section id="experience" className="py-20 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <div className="text-center mb-16 scroll-animate w-full max-w-full overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 break-words w-full max-w-full">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed break-words w-full max-w-full">
            Progressive career in IT support with increasing responsibilities and expertise
          </p>
        </div>

        <div className="space-y-8 w-full max-w-full overflow-hidden">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`card-hover relative border-primary/10 ${
                exp.highlight ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20' : ''
              } scroll-animate w-full max-w-full overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {exp.highlight && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white whitespace-nowrap">
                    <Award className="h-3 w-3 mr-1" />
                    Current Role
                  </Badge>
                </div>
              )}
              <CardHeader className="w-full max-w-full overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full max-w-full overflow-hidden">
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <CardTitle className="text-xl flex items-center gap-2 break-words w-full max-w-full">
                      {exp.highlight && <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />}
                      <span className="break-words w-full max-w-full">{exp.title}</span>
                    </CardTitle>
                    <p className="text-lg text-primary font-medium break-words w-full max-w-full">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground flex-shrink-0 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 w-full max-w-full overflow-hidden">
                <ul className="space-y-2 w-full max-w-full overflow-hidden">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2 w-full max-w-full overflow-hidden">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-muted-foreground break-words min-w-0 flex-1">{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2 w-full max-w-full overflow-hidden">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/10 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
