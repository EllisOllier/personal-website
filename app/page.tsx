// Development Branch
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";

export default function Home() {
    return (
        <div className="text-white bg-gray-900 h-full flex flex-col">
            <header className="fixed z-20 backdrop-blur-xs rounded-md bg-gray-800/90 w-screen flex justify-center items-center gap-10 p-4 border-1 border-gray-700 text-white">
                <div id="header-title" className="">
                    <Image
                        src={"/images/logo-white.svg"}
                        width={32}
                        height={32}
                        alt="Website Logo"
                    />
                </div>
                <div id="section-links" className="">
                    <ul className="flex gap-5">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>
                <div id="social-links">
                    <ul className="flex gap-5">
                        <li>
                            <a
                                href="https://github.com/EllisOllier"
                                target="_blank"
                            >
                                <Image
                                    className=""
                                    src="/images/github.png"
                                    width={32}
                                    height={32}
                                    alt="A picture of me!"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ellisollier/"
                                target="_blank"
                            >
                                <Image
                                    className=""
                                    src="/images/linkedin.png"
                                    width={34}
                                    height={34}
                                    alt="A picture of me!"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <section id="about" className="flex flex-col py-20">
                <div>
                    <div id="about-title">
                        <h2 className="text-6xl text-center py-5">About</h2>
                    </div>
                    <div id="about-main" className="flex lg:flex-row md:flex-col p-10 gap-10 justify-center items-center">
                        <div id="about-details" className="flex items-center justify-center gap-5">
                            <Image
                                className="rounded-4xl"
                                src="/images/portait.jpg"
                                width={150}
                                height={0}
                                alt="A picture of me!"
                            />
                            <p className="max-w-100">
                                I'm Ellis, A Second-year Software Engineering
                                student at Manchester Metropolitan University
                                seeking a placement starting Summer 2026.
                                Experience in leading a six-person team to
                                deliver a full-stack finance tracker using
                                React, ExpressJS and NodeJS. Proficient in Java,
                                JavaScript/TypeScript, React, and Next.js, with
                                developing skills in Vue.js. Passionate about
                                all aspects of programming, including building
                                robust systems and impactful web applications.
                            </p>
                        </div>
                        <div
                            id="skills"
                            className="flex mt-10 gap-10 justify-center"
                        >
                            <div id="row-1" className="flex flex-col gap-3">
                                <SkillCard
                                    title="JavaScript"
                                    image_path="images/skills/JavaScript.svg"
                                />
                                <SkillCard
                                    title="TypeScript"
                                    image_path="images/skills/TypeScript.svg"
                                />
                                <SkillCard
                                    title="CSS3"
                                    image_path="images/skills/CSS3.svg"
                                />
                                <SkillCard
                                    title="HTML5"
                                    image_path="images/skills/HTML5.svg"
                                />
                            </div>
                            <div id="row-2" className="flex flex-col gap-3">
                                <SkillCard
                                    title="React.js"
                                    image_path="images/skills/React.svg"
                                />
                                <SkillCard
                                    title="Next.js"
                                    image_path="images/skills/Next.js.svg"
                                />
                                <SkillCard
                                    title="Node.js"
                                    image_path="images/skills/Node.js.svg"
                                />
                                <SkillCard
                                    title="Express.js"
                                    image_path="images/skills/Express.svg"
                                />
                            </div>
                            <div id="row-3" className="flex flex-col gap-3">
                                <SkillCard
                                    title="TailwindCSS"
                                    image_path="images/skills/Tailwind CSS.svg"
                                />
                                <SkillCard
                                    title="PostgresSQL"
                                    image_path="images/skills/PostgresSQL.svg"
                                />
                                <SkillCard
                                    title="MongoDB"
                                    image_path="images/skills/MongoDB.svg"
                                />
                                <SkillCard
                                    title="Java"
                                    image_path="images/skills/Java.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div id="projects-title">
                    <h2 className="text-6xl text-center py-5">Projects</h2>
                </div>
                <div id="project-cards" className="flex flex-col gap-8 relative">
                    <ProjectCard
                        classes="justify-start"
                        id="project-one"
                        title="Finance Tracker for Students"
                        description="A full-stack react app created as part of
                            the Team Project module during the 1st year of the
                            Software Engineering degree."
                        demo_link=""
                        repo_link="https://github.com/EllisOllier/finance-tracker-students"
                        image_path="/images/projects/finance-tracker.png"
                        tech_svgs={[
                            { src: "/images/skills/React.svg", alt: "React"},
                            { src: "/images/skills/CSS3.svg", alt: "CSS3"},
                            { src: "/images/skills/Node.js.svg", alt: "Node.js"},
                            { src: "/images/skills/Express.svg", alt: "Express.js"},
                            { src: "/images/skills/PostgresSQL.svg", alt: "PostgresSQL"}

                        ]}
                    />
                    <ProjectCard
                        classes="justify-end"
                        id="project-two"
                        title="DevBuddy"
                        description="A vanilla Java command-line interface designed to simplify project creation and version control. It offers straightforward and easy-to-remember commands."
                        repo_link="https://github.com/EllisOllier/devbuddy"
                        image_path="/images/projects/devbuddy.png"
                        tech_svgs={[
                            { src: "/images/skills/Java.svg", alt:"Java"},
                        ]}
                    />
                    <ProjectCard
                        classes="justify-start"
                        id="project-three"
                        title="Green Computing"
                        description="A Next.JS website created to educate people about Green Computing which was created as part of Industrial & Community Engagement unit for university."
                        demo_link=""
                        repo_link="https://github.com/EllisOllier/green-computing"
                        image_path="/images/projects/green-computing.png"
                        tech_svgs={[
                            {src: "/images/skills/Next.js.svg", alt: "Next.js"},
                            {src: "/images/skills/Tailwind CSS.svg", alt: "Tailwind CSS"},
                        ]}
                    />
                    <ProjectCard
                        classes="justify-end"
                        id="project-four"
                        title="Dungeon Game"
                        description="A simple CLI game based on the Masato Uesugi's Welcome to the Dungeon and completed as part of a Advanced Programming lab session."
                        demo_link=""
                        repo_link="https://github.com/EllisOllier/dungeon-game"
                        image_path="/images/projects/dungeon-game.png"
                        tech_svgs={[
                            { src: "/images/skills/Java.svg", alt:"Java"},
                        ]}
                    />
                    <ProjectCard
                        classes="justify-start"
                        id="project-five"
                        title="Personal Webite"
                        description="A website created using Next.js in order to give details about who I am, what I do and what I know."
                        repo_link="https://github.com/EllisOllier/personal-website"
                        image_path="/images/projects/personal-website.png"
                        tech_svgs={[
                            {src: "/images/skills/Next.js.svg", alt: "Next.js"},
                            {src: "/images/skills/Tailwind CSS.svg", alt: "Tailwind CSS"},
                            {src: "/images/skills/TypeScript.svg", alt: "TypeScript"},
                            
                        ]}
                    />
                </div>
            </section>
            <section id="contact">
                { /* Removed Contact Form, Need to add */}
            </section>
            <footer id="footer" className="backdrop-blur-xs rounded-md bg-gray-800/90 w-screen flex justify-center items-center gap-10 p-4 border-1 border-gray-700 text-white">
                <div id="social-links">
                    <ul className="flex justify-center gap-5">
                        <li>
                            <a
                                href="https://github.com/EllisOllier"
                                target="_blank"
                            >
                                <Image
                                    className=""
                                    src="/images/github.png"
                                    width={32}
                                    height={32}
                                    alt="A picture of me!"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ellisollier/"
                                target="_blank"
                            >
                                <Image
                                    className=""
                                    src="/images/linkedin.png"
                                    width={34}
                                    height={34}
                                    alt="A picture of me!"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
