type ProjectCardProps = {
    id: string;
    title: string;
    description: string;
    demo_link: string;
    repo_link: string;
};

export default function ProjectCard({id, title, description, demo_link, repo_link }: ProjectCardProps) {
    return (
        <div id={id} className="border-2 border-white">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={demo_link}>Demo</a>
            <a href={repo_link}>GitHub Repository</a>
        </div>
    )
}