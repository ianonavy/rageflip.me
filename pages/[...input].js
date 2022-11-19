import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../views/Main";

import { rageFlipped } from "../lib/flip";
import { getAccessibleOutput } from "../lib/screenreaders";

export async function getServerSideProps(context) {
  const input = context.params.input.join("/");
  return {
    props: { input }, // will be passed to the page component as props
  };
}

export default function Input({ input }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RageFlip.Me</title>
        <meta
          name="description"
          content={`${rageFlipped(input)}\n\n${getAccessibleOutput(input)}`}
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          property="og:image"
          content={`/api/og?text=${encodeURIComponent(input)}`}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main textToFlip={input} />
    </div>
  );
}
