import techProjectsData from "../../data/TechProjects";
import "./tech-projects-card.css"

export default function TechProjectsCard() {
    return (
        <section>
            {techProjectsData.map((project) => {
                return (
                    <div className="card">
                        <img src={project.img} alt={project.title} height="200px" draggable="false" />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <a href={project.live}>Live Link</a>
                        <br />
                        <a href={project.code}>Code Link</a>
                        <h6>{project.time}</h6>
                    </div>
                )
            })}
        </section>
    )
}