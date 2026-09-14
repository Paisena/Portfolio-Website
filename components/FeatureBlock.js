import Image from "next/image";
import { styles } from "./FeatureBlock.styles";

export default function FeatureBlock({ heading, paragraphs, image, imageOnRight }) {
  const textClass = imageOnRight ? styles.textCol : styles.textColReversed;
  const imageClass = imageOnRight ? styles.imageCol : styles.imageColReversed;

  return (
    <section className={styles.section}>
      <div className={textClass}>
        <h2 className={styles.heading}>{heading}</h2>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={imageClass}>
        <Image src={image} alt="" width={600} height={400} className={styles.image} />
      </div>
    </section>
  );
}
