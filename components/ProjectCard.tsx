import Image from "next/image";

type ProjectCardProps = {
    id: string;
    title: string;
    description: string;
    demo_link: string;
    repo_link: string;
    image_path: string;
    classes: string;
};

export default function ProjectCard({
    id,
    title,
    description,
    demo_link,
    repo_link,
    image_path,
    classes,
}: ProjectCardProps) {
    return (
        <div
            id={id}
            className={
                "flex justify-center " +
                classes
            }
        >
            <div className="max-w-200 p-5 m-5 bg-blue-900 border-1 border-gray-800 rounded-xl ">
                <div className="flex justify-center items-center pb-5">
                    <div id="project-info" className="max-w-50">
                        <h2 className="text-2xl mb-5">{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div id="image-container" className="pl-10">
                        {image_path ? (
                            <Image
                                className="rounded-xl"
                                src={image_path}
                                width={600}
                                height={600}
                                alt="Test"
                            />
                        ) : null}
                    </div>
                </div>

                <div id="project-links" className="flex gap-10">
                    {demo_link ? (
                        <a href={demo_link}>{"Demo"}</a>
                    ) : (
                        <p>No Demo Available</p>
                    )}

                    <a href={repo_link}>GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}
