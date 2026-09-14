import Link from "next/link";
import { styles } from "./ProjectDetailHeader.styles";

export default function ProjectDetailHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>LOGO</span>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </nav>
    </header>
  );
}
