import styles from "../styles/Home.module.css";
import Main from "../views/Main";
import Header from "../components/header";

import { rageFlipped } from "../lib/flip";
import { getAccessibleOutput } from "../lib/screenreaders";

export async function getServerSideProps(context) {
  const input = context.params.input.join("/");
  return {
    props: { input }, // will be passed to the page component as props
  };
}

export default function Input({ input }) {
  const description = `${rageFlipped(input)}\n\n${getAccessibleOutput(input)}`;
  const og = `/api/og?text=${encodeURIComponent(input)}`;

  return (
    <div className={styles.container}>
      <Header description={description} og={og} />
      <Main textToFlip={input} />
    </div>
  );
}
