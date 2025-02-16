import "./Team.css"

function Team() {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: "/team-member-1.jpg" },
    { name: "Jane Smith", role: "Lead Developer", image: "/team-member-2.jpg" },
    { name: "Mike Johnson", role: "UX Designer", image: "/team-member-3.jpg" },
    { name: "Emily Brown", role: "Project Manager", image: "/team-member-4.jpg" },
  ]

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-member-image" />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

