import { styles } from "./NavBar.styles";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}></span>
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
