const whatsappMessage = encodeURIComponent(
`Hi Majesty,

I came across your portfolio website and I'm interested in discussing a project with you.
`
)
const whatsappLink = `https://wa.me/2348074775129?text=${whatsappMessage}`


export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-6">

          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg">
             M_Corp
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Building useful digital solutions that solve real problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-400">

              <li>
                <a href="#hero">
                  Home
                </a>
              </li>

              <li>
                <a href="#projects">
                  Projects
                </a>
              </li>

              <li>
                <a href="#services">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Connect
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-400">

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="mailto:majestyehiz@gmail.com"
                >
                  Email
                </a>
              </li>

              <li>~Call @+2348074775129</li>

            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-800">

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} M_Corp. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}