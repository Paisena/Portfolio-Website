import { styles } from "./Projects.styles";
import ProjectCard from "./ProjectCard";

const projects = [
  { slug: "astrojumper", title: "Astrojumper", image: "/AstrojumperWallpaper.jpg", imageWidth: 1843, imageHeight: 1053,  description: "2D pixel art space platformer/Astroid game!" },
  { slug: "visual-novel-tool", title: "Visual Novel Authoring Tool", image: "/Textbox.png",imageWidth: 604, imageHeight: 413, description: "Unity based dialogue system" },
  { slug: "sound-generator", title: "Sound Generator Tool", image: "/SoundLogo.png",imageWidth: 548, imageHeight: 455, description: "A tool which gives the user freedom to generate basic sound effects" },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.subtext}>Some of the projects I&apos;ve worked on</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
