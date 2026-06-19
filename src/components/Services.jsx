import { Globe, GraduationCap, Laptop } from "lucide-react"
const services = [
  {
    title: "Website Development",

    description:
      "Business websites, portfolio websites, landing pages, and organizational websites designed to establish a strong online presence.",
    
    icon : Globe,
  },

  {
    title: "Educational Web Applications",

    icon : GraduationCap,

    description:
      "Interactive learning tools and systems designed to simplify complex concepts and improve educational experiences.",
  },

  {
    title: "Custom Web Applications",

    icon : Laptop,

    description:
      "Tailored digital solutions built around specific user needs, workflows, and business challenges.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold">
          Services
        </h2>

        <p className="mt-4 text-gray-600">
          Solutions I offer to help individuals,
          organizations, and businesses build
          meaningful digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {services.map((service) => {

          const Icon = service.icon

          return (
            <div
              key={service.title}
              className="p-6 border rounded-xl"
            >

              <Icon className="w-10 h-10 text-cyan-500 mb-4" />

              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

            </div>
          )
        })}

      </div>
    </section>
  )
}