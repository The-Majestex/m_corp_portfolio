const projects = [
  {
    title: "M_Hub",

    oneLiner:
      "A continuously evolving digital hub designed to provide sports information for students and a platform for anonymous conversations.",

    problem:
      "Students often lack a centralized and accessible way to stay informed about campus sports activities, updates, and events. There is also limited space for anonymous student discussions and engagement.",

    solution:
      "Built M_Hub, a digital platform that provides sports information for students while also offering a space for anonymous conversations and community interaction.",

    result:
      "Created a centralized hub that makes campus sports information easier to access and encourages student engagement through open discussions.",

    stack:
      "HTML • JavaScript • CSS • Python • PostgreSQL",

    liveDemo: "...",
  },

  {
    title: "M_Sorting Algorithm Visualizer",

    oneLiner:
      "An educational tool that demonstrates sorting algorithms through step-by-step visualizations.",

    problem:
      "Students struggle to understand sorting algorithms when learning only through static code examples and textbook explanations.",

    solution:
      "Developed an interactive visualization tool that animates sorting algorithms step-by-step, allowing users to observe how data moves throughout the sorting process.",

    result:
      "Makes algorithm behavior easier to understand and visualize, helping students learn complex concepts through visual interaction rather than memorization.",

    stack:
      "HTML • JavaScript • CSS • Python • PostgreSQL",

    liveDemo: "...",
  },  
 
  {
    title: "M_ Birthday Website",

    oneLiner:
      "Personalized celebratory website crafted to deliver a memorable and engaging digital experience.",

    problem:
      "Generic greeting messages and templates often fail to create a memorable and personalized digital experience for special occasions.",

    solution:
      "Designed and developed a custom birthday website tailored specifically to the recipient, focusing on personalization, presentation, and user experience.",

    result:
      "Delivered a unique and memorable digital experience that felt more meaningful and engaging than traditional birthday messages or templates.",

    stack:
      "HTML • JavaScript • CSS • Python • PostgreSQL",

    liveDemo: "...",
  },  
]

// const projects = [
//   {
//     title: "M_Hub",
//     description:
//       "Digital hub helping students stay informed about campus sports while providing a safe space for anonymous conversations.",

//     problem:
//       "Students often lack a centralized platform for accessing sports updates and engaging in open discussions within their campus community.",

//     stack:
//       "HTML • JavaScript • CSS • Python • PostgreSQL",

//     liveDemo: "https://themhub.netlify.app",

//     github: "",
//   },

//   {
//     title: "Sorting Visualizer",

//     description:
//       "An educational tool that demonstrates sorting algorithms through step-by-step visualizations.",

//     problem:
//       "Students often struggle to understand algorithm execution from static code examples alone. This tool makes the learning process visual and intuitive.",

//     stack:
//       "HTML • CSS • JavaScript",

//     liveDemo: "https://msortingalgorithmvisualizer.netlify.app",

//     github: "",
//   },

//   {
//     title: "Birthday Website",

//     description:
//       "Personalized celebratory website crafted to deliver a memorable and engaging digital experience.",

//     problem:
//       "Generic templates rarely capture personal stories and emotions effectively. This project focused on creating a meaningful and customized experience.",

//     stack:
//       "HTML • CSS • JavaScript",

//     liveDemo: "https://joannasbirthdayv2.netlify.app",

//     github: "",
//   },
// ]

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold">
          Projects
        </h2>

        <p className="mt-4 text-gray-600">
          A selection of projects demonstrating
          problem-solving, product thinking, and
          practical development skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-xl"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-300">
              {project.oneLiner}
            </p>

            <div className="mt-6">

              <h4 className="font-semibold text-cyan-400">
                Problem
              </h4>

              <p className="mt-2 text-gray-300">
                {project.problem}
              </p>

            </div>

            <div className="mt-4">

              <h4 className="font-semibold text-cyan-400">
                Solution
              </h4>

              <p className="mt-2 text-gray-300">
                {project.solution}
              </p>

            </div>

            <div className="mt-4">

              <h4 className="font-semibold text-cyan-400">
                Result
              </h4>

              <p className="mt-2 text-gray-300">
                {project.result}
              </p>

            </div>

            <div className="mt-6">
              <p className="mt-2 text-gray-700">
                Tech Stack |||  {project.stack}
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cyan-400 text-slate-950 rounded-lg font-semibold hover:scale-105 transition duration-300"
              >
                Live Demo
              </a>

              {
                project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-cyan-400 text-slate-950 rounded-lg font-semibold hover:scale-105 transition duration-300"
                  >
                    GitHub
                  </a>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

