import Image from "next/image";
import { styles } from "./FeatureBlock.styles";

export default function FeatureBlock({
  heading,
  paragraphs,
  image,
  imageWidth,
  imageHeight,
  imageMaxWidth,
  imageOnRight,
}) {
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
        <div
          className={styles.imageWrapper}
          style={{
            aspectRatio: `${imageWidth} / ${imageHeight}`,
            maxWidth: imageMaxWidth ? `${imageMaxWidth}px` : "100%",
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
