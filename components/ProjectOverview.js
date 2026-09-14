import { styles } from "./ProjectOverview.styles";

export default function ProjectOverview({ overview, steamUrl, technologies, role, timeline }) {
  return (
    <section className={styles.section}>
      <div className={styles.overviewCol}>
        <h2 className={styles.heading}>Project Overview</h2>
        {overview.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        {steamUrl && (
          <p className={styles.paragraph}>
            Check it out on{" "}

              <a href={steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.steamLink}
            >
              Steam
            </a>

          </p>
        )}
      </div>

      <div className={styles.infoCard}>
        <h3 className={styles.infoHeading}>Technologies Used</h3>
        <div className={styles.tagList}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.metaList}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{role}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>{timeline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
