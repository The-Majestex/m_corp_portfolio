export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I Build Websites and Digital Solutions
          <br />
          that help businesses and communities solve real problems.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Computer Science undergraduate passionate about building
          useful products—from educational tools to business websites.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-50 transition"
          >
            Contact Me
          </a>

        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 text-gray-600">

          <p>✓ 3 Live Projects Built</p>

          <p>✓ Problem-Solving Focused</p>

          <p>✓ Available for Freelance Work</p>

        </div>

      </div>
    </section>
  )
}