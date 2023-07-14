import { AiFillGithub } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

export default function ProjectCard({ projects }) {

    return (
        projects.map((project) => (
            <div className='projectCard hover:border-2 hover:border-fuchsia-400'>
                <h3 className='p-2'>{project.title}</h3>
                <img
                    className="rounded-xl opacity-70"
                    alt={project.title}
                    src={project.image}
                />
                <p className='text-sm'>{project.description}</p>
                <div className="flex-row">
                    <a className='cardIcon' href={project.live}><BiLogIn /></a>
                    <a className='cardIcon' href={project.repo}><AiFillGithub /></a>
                </div>
            </div>
        ))
    )
}