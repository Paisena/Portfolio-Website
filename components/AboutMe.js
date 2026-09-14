import Image from "next/image";
import { styles } from "./AboutMe.styles"

export default function AboutMe() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>About Me</h2>
          <p className={styles.cardText}>
            Hi! I'm Jonathan, a Computer Science graduate and master's student with a passion for game dev and software engineering.<br/><br/>
            I recently graduated from UC Santa Cruz, majoring in Computer Science: Game Design, and am currently working on my master's degree in Computer Science at California State University, Fullerton.<br/> <br/>
            Here, you'll find a collection of projects I've worked on.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/GradPfp.jpg"
            alt="Photo of me"
            fill
            sizes="(max-width: 1088px) 100vw, 520px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}
