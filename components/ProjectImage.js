import Image from "next/image";
import { styles } from "./ProjectImage.styles";

export default function ProjectImage({ src, width, height, maxWidth }) {
  return (
    <div
      className={styles.wrapper}
      style={{
        aspectRatio: `${width} / ${height}`,
        maxWidth: maxWidth ? `${maxWidth}px` : "100%",
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 1088px) 100vw, 1088px"
        className={styles.image}
      />
    </div>
  );
}
