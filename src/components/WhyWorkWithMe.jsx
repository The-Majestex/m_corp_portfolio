const reasons = [
  {
    title: "Problem-Solving First",

    description:
      "I don't start with code. I start with understanding the problem.",
  },

  {
    title: "Clear Communication",

    description:
      "You receive regular updates throughout the project, not silence.",
  },

  {
    title: "Clean Modern Builds",

    description:
      "Responsive, maintainable, and practical solutions designed for real-world use.",
  },

  {
    title: "Commitment to Delivery",

    description:
      "Projects are completed with care and attention rather than left unfinished.",
  },
]

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold">
          Why Work With Me
        </h2>

        <p className="mt-4 text-gray-600">
          Building solutions with clarity,
          reliability, and a focus on outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="p-6 border rounded-xl"
          >

            <h3 className="text-2xl font-semibold">
              {reason.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {reason.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}