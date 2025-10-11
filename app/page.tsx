// Development Branch
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <div className="text-white bg-gray-900 h-full flex flex-col">
            <header className="flex gap-10 p-4 border-2 border-white text-white">
                <div id="header-title">
                    <h1 className="">Ellis Ollier</h1>
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
            <section id="about" className="flex flex-col">
                <div id="about-title">
                    <h2 className="text-6xl">About</h2>
                    <Image
                        className="rounded-4xl"
                        src="/images/portait.jpg"
                        width={100}
                        height={100}
                        alt="A picture of me!"
                    />
                </div>
                <div id="about-details">
                    <p className="">
                        Second-year BSc (Hons) Software Engineering student at
                        Manchester Metropolitan University seeking a 12-month
                        Software / Full-Stack / Java Developer / Back-End
                        placement starting summer 2026. Experience in leading a
                        six-person team to deliver a full-stack finance tracker
                        using React, ExpressJS and NodeJS. Proficient in Java,
                        JavaScript/TypeScript, React, and Next.js, with
                        developing skills in Vue.js. Passionate about all
                        aspects of programming, including building robust
                        systems and impactful web applications.
                    </p>
                </div>
                <div id="skills">
                    <div id="row-1"></div>
                    <div id="row-2"></div>
                    <div id="row-3"></div>

                    <h3>Temp skills list:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>ReactJS</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>TailWindCSS</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </section>
            <section id="projects">
                <div id="projects-title">
                    <h2 className="text-6xl">Projects</h2>
                </div>
                <div id="project-cards">
                    <ProjectCard
                        id="project-one"
                        title="Finance Tracker for Students"
                        description="A Finance Tracker for Students created as part of
                            the Team Project module during the 1st year of the
                            Software Engineering degree."
                        demo_link="https://github.com/EllisOllier"
                        repo_link="https://github.com/EllisOllier/finance-tracker-students"
                    />
                    <ProjectCard
                        id="project-two"
                        title="DevBuddy"
                        description="DevBuddy is a vanilla Java command-line interface designed to simplify project creation and version control. It offers straightforward and easy-to-remember commands."
                        demo_link="https://github.com/EllisOllier"
                        repo_link="https://github.com/EllisOllier/devbuddy"
                    />
                    <ProjectCard
                        id="project-three"
                        title="Green Computing"
                        description="A Next.JS website created to educate people about Green Computing which was created as part of Industrial & Community Engagement unit for university."
                        demo_link="https://github.com/EllisOllier"
                        repo_link="https://github.com/EllisOllier/green-computing"
                    />
                    <ProjectCard
                        id="project-four"
                        title="Dungeon Game"
                        description="Based on the Masato Uesugi’s Welcome to the Dungeon and completed as part of a Advanced Programming lab session."
                        demo_link="https://github.com/EllisOllier"
                        repo_link="https://github.com/EllisOllier/dungeon-game"
                    />
                </div>
            </section>
            <section id="contact">
                <ContactForm />
            </section>
            <footer id="footer" className="p-5">
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
