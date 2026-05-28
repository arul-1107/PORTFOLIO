export default function Skills() {
  const skills = [
    'React',
    'Docker',
    'Jenkins',
    'Spring Boot',
    'Maven',
    'Nginx',
    'MySQL'
  ]

  return (
    <section className="p-20">
      <h2 className="text-5xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-3 gap-6">
        {skills.map(skill => (
          <div className="metal-card p-10 text-center text-xl" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
