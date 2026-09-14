import Link from "next/link";
import Image from "next/image";
import { styles } from "./ProjectCard.styles";

export default function ProjectCard({
  slug,
  title,
  image,
  imageWidth,
  imageHeight,
  prompt,
  description,
}) {
  return (
    <Link href={`/projects/${slug}`} className={styles.card}>
      <div className={styles.title}>{title}</div>

      {image ? (
        <div
          className={styles.imageWrapper}
          style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 340px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className={styles.body}>
          <p className={styles.prompt}>{prompt}</p>
        </div>
      )}

      <div className={styles.footer}>{description}</div>
    </Link>
  );
}
