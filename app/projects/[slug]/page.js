import ProjectDetailHeader from "../../../components/ProjectDetailHeader";
import ProjectTitle from "../../../components/ProjectTitle";
import ProjectImage from "../../../components/ProjectImage";
import ProjectOverview from "../../../components/ProjectOverview";
import FeatureBlock from "../../../components/FeatureBlock";
import Footer from "../../../components/Footer";
import { projects } from "../../../data/projects";
import { styles } from "./page.styles";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <main>
      <ProjectDetailHeader />
      <div className={styles.contentPanel}>
        <ProjectTitle title={project.title} tagline={project.tagline} />
        {project.image && (
          <ProjectImage
            src={project.image}
            width={project.imageWidth}
            height={project.imageHeight}
            maxWidth={project.imageMaxWidth}
          />
        )}
        <ProjectOverview
          overview={project.overview}
          steamUrl={project.steamUrl}
          technologies={project.technologies}
          role={project.role}
          timeline={project.timeline}
          status={project.status}
        />
        {project.features.map((feature, i) => (
          <FeatureBlock key={i} {...feature} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
