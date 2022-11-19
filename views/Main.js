import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { rageFlipped } from "../lib/flip";
import { getAccessibleOutput } from "../lib/screenreaders";

export default function Main({ textToFlip = "" }) {
  const [text, setText] = useState(textToFlip);
  const [output, setOutput] = useState();
  const [accessibleOutput, setAccessibleOutput] = useState();
  const [clipboard, setClipboard] = useState();
  const router = useRouter();
  const [location, setLocation] = useState();
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setClipboard(navigator.clipboard);
    setLocation(window.location);
  }, []);

  useEffect(() => {
    setOutput(rageFlipped(text));
    setAccessibleOutput(getAccessibleOutput(text));
  }, [text]);

  useEffect(() => {
    setText(textToFlip);
  }, [textToFlip]);

  const copy = async () => {
    const toCopy = checked ? `${output} ${getAccessibleOutput(text)}` : output;
    await clipboard.writeText(toCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const shareLink = async () => {
    const url = new URL(location.href);
    url.pathname = "/" + text;
    router.push(url);
    await clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setCopied(false);
  };

  const onCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <main className={styles.main}>
      <h1>RageFlip.Me</h1>
      <div className={styles.input}>
        <label htmlFor="text">What to flip?</label>
        <input id="text" type="text" value={text} onChange={handleChange} />
      </div>
      <div className={styles.output}>
        <div className={styles.outputText}>
          {output}
          <div hidden={!checked} className={styles.accessibleOutput}>
            {accessibleOutput}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.screenReaderText}>
          <input
            id="accessibleMode"
            name="accessibleMode"
            type="checkbox"
            defaultChecked={checked}
            onChange={onCheck}
          />
          <label
            className={styles.accessibleModeLabel}
            htmlFor="accessibleMode"
          >
            Include screen reader text
          </label>
        </div>
        <button id="copy" onClick={copy}>
          Copy
        </button>
        <button id="copy" onClick={shareLink}>
          Share link
        </button>
      </div>
      <div
        className={`${styles.copied} ${
          copied ? styles.visible : styles.hidden
        }`}
      >
        Copied to clipboard
      </div>
      <footer className={styles.footer}>
        <a href="/privacy.html">Privacy</a>
        <div>|</div>
        <div className={styles.support}>
          Like this app?&nbsp;
          <a href="//www.buymeacoffee.com/justapotato" target="_blank">
            Buy me a potato
          </a>
        </div>
      </footer>
    </main>
  );
}
