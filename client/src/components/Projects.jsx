import "./Projects.css"

function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "A fully-featured online store with secure payments",
      image: "/project-1.jpg",
    },
    {
      name: "Social Media App",
      description: "A mobile app for connecting people with similar interests",
      image: "/project-2.jpg",
    },
    {
      name: "Task Management System",
      description: "An efficient tool for team collaboration and project tracking",
      image: "/project-3.jpg",
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img src={project.image || "/placeholder.svg"} alt={project.name} className="project-image" />
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

