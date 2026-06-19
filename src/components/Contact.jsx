const whatsappMessage = encodeURIComponent(
`Hi Majesty,

I came across your portfolio website and I'm interested in discussing a project with you.
`
)

const whatsappLink = `https://wa.me/2348074775129?text=${whatsappMessage}`

const contacts = [
  {
    title: "WhatsApp",

    description: "Chat with me on WhatsApp",

    link: whatsappLink,

    buttonText: "Open WhatsApp",
  },

  {
    title: "Email",

    description: "majestyehiz@gmail.com",

    link: "mailto:majestyehiz@gmail.com",

    buttonText: "Send Email",
  },
]


const detailedWhatsappMessage = encodeURIComponent(
`Hi Majesty,

I came across your portfolio website and I'm interested in discussing a project with you.

Project Type:
[Website / Web App / Educational Tool / Other]

Brief Description:
[Tell me a little about what you need]

Timeline (Optional):
[When would you like this completed?]

Looking forward to hearing from you.`
)


export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Let's Build Something Useful Together
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have an idea, need a website, or want to discuss a project?
          I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-9">

        {contacts.map((contact) => (
          <div
            key={contact.title}
            className="p-6 border rounded-xl hover:scale-105 transition text-center"
          >

            <h3 className="text-2xl font-semibold">
              {contact.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {contact.description}
            </p>

            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-4 py-2 bg-cyan-500 text-white rounded-lg"
            >
              {contact.buttonText}
            </a>

          </div>
        ))}

      </div>

      <div className="mt-12 text-center">

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold"
        >
          Start a Conversation
        </a>

      </div>

    </section>
  )
}