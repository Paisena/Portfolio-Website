import { styles } from "./Footer.styles";

const legalLinks = [{ label: "LinkedIn", href: "https://linkedin.com/in/jonathan-ng0" },
                    { label: "Github", href: "https://github.com/Paisena"}
                  ];
const socialLinks = [{label: "", href: ""},];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
