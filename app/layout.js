import "./globals.css";
import Image from "next/image";
import { styles } from "./layout.styles";

export const metadata = {
  title: "Jonathan's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.bgWrapper}>
          <Image
            src="/steam.jpg"
            alt=""
            fill
            className={styles.bgImage}
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
