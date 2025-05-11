import Link from "next/link"
import { Compass, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6" />
              <span className="text-xl font-bold">Career Compass</span>
            </div>
            <p className="text-primary-foreground/80 max-w-xs">
              Guiding students to their perfect college and career path with comprehensive resources and support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Colleges
                </Link>
              </li>
              <li>
                <Link
                  href="/career-paths"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  Career Paths
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">info@careercompass.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">123 Education Ave, Knowledge City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Career Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
