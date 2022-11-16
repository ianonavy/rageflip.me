import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { rageFlipped } from "../lib/flip";

export default function Main({ textToFlip }) {
  const [text, setText] = useState(textToFlip);
  const [output, setOutput] = useState();
  const [clipboard, setClipboard] = useState();
  const router = useRouter();
  const [location, setLocation] = useState();

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setClipboard(navigator.clipboard);
    setLocation(window.location);
  }, []);

  useEffect(() => {
    setOutput(rageFlipped(text));
  }, [text]);

  useEffect(() => {
    setText(textToFlip);
  }, [textToFlip]);

  const copy = async () => {
    await clipboard.writeText(output);
    setCopied(true);
  };
  const shareLink = async () => {
    const url = new URL(location.href);
    url.pathname = "/" + text;
    router.push(url);
    await clipboard.writeText(url);
    setCopied(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setCopied(false);
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
        <button id="copy" onClick={shareLink}>
          Share link
        </button>
        <div
          className={`${styles.copied} ${
            copied ? styles.visible : styles.hidden
          }`}
        >
          Copied to clipboard
        </div>
      </div>

      <footer>
        <a
          className={styles.support}
          href="//www.buymeacoffee.com/justapotato"
          target="_blank"
        >
          Donate a potato
        </a>
      </footer>
    </main>
  );
}
