import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    id: string;
    title: string;
    description: string;
    demo_link?: string;
    repo_link: string;
    image_path: string;
    classes?: string;
    tech_svgs?: { src: string; alt: string }[];
};

export default function ProjectCard({
    id,
    title,
    description,
    demo_link,
    repo_link,
    image_path,
    classes,
    tech_svgs,
}: ProjectCardProps) {
    return (
        <div id={id} className={"flex justify-center " + classes}>
            <div className="max-w-200 p-5 m-5 bg-blue-900 border-1 border-gray-800 rounded-xl ">
                <div id="top" className="flex justify-center items-center pb-5">
                    <div id="project-info" className="max-w-50">
                        <h2 className="text-2xl mb-5">{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div
                        id="image-container"
                        className="pl-4 w-full max-w-[180px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[400px] hidden sm:block"
                    >
                        {image_path ? (
                            <Image
                                className="rounded-xl w-full h-auto"
                                src={image_path}
                                width={600}
                                height={600}
                                alt={title}
                            />
                        ) : null}
                    </div>
                </div>
                <div id="bottom">
                    <div
                        id="tech-used"
                        className="inline-flex gap-3 border-1 border-gray-900 bg-radial from-blue-600 to-blue-900 p-2 rounded-xl w-auto"
                    >
                            {tech_svgs &&
                                tech_svgs.map((tech, index) => (
                                    <Image
                                        key={index} // Causes an error if not there
                                        src={tech.src}
                                        alt={tech.alt}
                                        width={32}
                                        height={32}
                                    />
                                ))}
                    </div>
                    <div id="project-links" className="flex gap-10 pt-3">
                        <Link href={repo_link}>GitHub Repository</Link>
                        {demo_link ? (
                            <Link href={demo_link}>Demo</Link>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
