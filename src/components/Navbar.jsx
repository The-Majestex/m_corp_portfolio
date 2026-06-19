import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Why Me", href: "#why-work-with-me" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo/Brand */}
        <a
          href="#hero"
          className="text-xl font-bold hover:text-cyan-400 transition"
        >
          M_Corp
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col px-6 py-4 gap-4">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  )
}