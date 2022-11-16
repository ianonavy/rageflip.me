import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

import { rageFlipped } from "../lib/flip";

export default function Main({ textToFlip }) {
  const [text, setText] = useState(textToFlip);
  const [output, setOutput] = useState();
  const [clipboard, setClipboard] = useState();

  useEffect(() => {
    setClipboard(navigator.clipboard);
  }, []);

  useEffect(() => {
    setOutput(rageFlipped(text));
  }, [text]);

  useEffect(() => {
    setText(textToFlip);
  }, [textToFlip]);

  const copy = async () => {
    await clipboard.writeText(output);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <main className={styles.main}>
      <h1>RageFlip.Me</h1>
      <div className={styles.input}>
        <label htmlFor="text">What to flip?</label>
        <input id="text" type="text" value={text} onChange={handleChange} />
      </div>
      <div className={styles.output}>
        <div id="output-text">{output}</div>
        <button id="copy" onClick={copy}>
          Copy
        </button>
      </div>
    </main>
  );
}
