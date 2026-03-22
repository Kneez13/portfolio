import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden w-full max-w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation max-w-full" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl float-animation max-w-full" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-full overflow-hidden">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="lg:order-1 order-2 text-center lg:text-left w-full max-w-full overflow-hidden">
            <div className="mb-8 scroll-animate w-full max-w-full overflow-hidden">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 flex-wrap max-w-full overflow-hidden">
                <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary whitespace-nowrap flex-shrink-0">
                  Available for Work
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-6 leading-tight break-words w-full max-w-full overflow-hidden">
                <span className="block w-full max-w-full">IT Support Engineer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-full mx-auto lg:mx-0 leading-relaxed break-words overflow-hidden">
                Specialized in providing exceptional technical support, troubleshooting complex issues, 
                and ensuring optimal system performance with a touch of elegance and precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-12 scroll-animate flex-wrap max-w-full overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg flex-shrink-0 whitespace-nowrap">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary/20 hover:bg-primary/10 flex-shrink-0 whitespace-nowrap">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-full mx-auto lg:mx-0 scroll-animate overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors flex-wrap max-w-full overflow-hidden">
                <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium text-xs sm:text-sm md:text-base break-words">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors flex-wrap max-w-full overflow-hidden">
                <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium text-xs sm:text-sm md:text-base break-words">it.support@email.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors flex-wrap max-w-full overflow-hidden">
                <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-medium text-xs sm:text-sm md:text-base break-words">Your Location</span>
              </div>
            </div>
          </div>

          {/* Profile Image - Mobile: Top, Desktop: Right */}
          <div className="lg:order-2 order-1 flex justify-center lg:justify-end scroll-animate-right w-full max-w-full overflow-hidden">
            <div className="relative max-w-full overflow-hidden">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-96 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl max-w-full">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/ines.jpg"
                    alt="Profile"
                    fill
                    className="object-cover rounded-full"
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
