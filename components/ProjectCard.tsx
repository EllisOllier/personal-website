import Image from 'next/image';

type ProjectCardProps = {
    id: string;
    title: string;
    description: string;
    demo_link: string;
    repo_link: string;
    image_path: string;
};

export default function ProjectCard({id, title, description, demo_link, repo_link, image_path }: ProjectCardProps) {
    return (
        <div id={id} className="border-2 border-white">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={demo_link}>{demo_link ? "Demo" : "Demo Coming Soon"}</a>
            <a href={repo_link}>GitHub Repository</a>
            {image_path ? (
                <Image
                    src={image_path}
                    width={600}
                    height={600}
                    alt="Test"
                />
            ) : null}
        </div>
    )
}