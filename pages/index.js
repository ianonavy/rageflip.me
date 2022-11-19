import styles from "../styles/Home.module.css";
import Main from "../views/Main";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header description={"So angry you could flip? Now you can!"} />
      <Main />
    </div>
  );
}
