import NavBar from "../components/NavBar";
import Title from "../components/Title";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { styles } from "./page.styles";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className={styles.contentPanel}>
        <Title />
        <AboutMe />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
