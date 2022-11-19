import Head from "next/head";

export default function Layout({ description, og }) {
  return (
    <Head>
      <title>RageFlip.Me</title>
      <meta name="description" content={description} />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0"
      />
      {og ? <meta property="og:image" content={og} /> : ""}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
