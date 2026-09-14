import { styles } from "./ProjectTitle.styles";

export default function ProjectTitle({ title, tagline }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.tagline}>{tagline}</p>
    </section>
  );
}
