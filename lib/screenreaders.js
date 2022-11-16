export function getAccessibleOutput(text) {
  if (text === "") {
    return `[For screen readers: emoticon of angry face flipping nothing in particular]`;
  } else {
    return `[For screen readers: emoticon of angry face flipping text like a table. Upside down text reads, "${text}"]`;
  }
}
