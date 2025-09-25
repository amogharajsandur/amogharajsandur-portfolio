import techProjectsData from "../../data/TechProjects";
import "./tech-projects-card.scss"

function projectStatus(status) {
    if (status === "Completed") {
        return <h6 className="status green">Status: {status}</h6> 
    } else if (status === "In Progress") {
        return <h6 className="status yellow">Status: {status}</h6>
    } else {
        return <h6 className="status red">Status: {status}</h6>
    }
};

export default function TechProjectsCard() {
    return (
        <section>
            {techProjectsData.map((project) => {
                return (
                    <div className="card" key={project.title.trim().split(" ").join("")}>
                        <img src={project.img} alt={project.title} draggable="false" />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <a href={project.live}>Live Link</a>
                        <br />
                        <a href={project.code}>Code Link</a>
                        <h5>{project.time}</h5>
                        {projectStatus(project.status)}
                        {project.stack.join(", ")}
                    </div>
                )
            })}
        </section>
    )
}