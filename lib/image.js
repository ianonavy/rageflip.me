import { createCanvas } from "@napi-rs/canvas";
import { rageFlipped } from "./flip";

function getLines(ctx, text, maxWidth) {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

export function getRageImage(text) {
  console.log("getRageImage", text);
  const canvasWidth = 1200;
  const canvasHeight = 628;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillStyle = "#ffffff";
  ctx.font = "64px sans-serif";
  ctx.textAlign = "center";

  // vertically center with paragraph breaks
  const lines = getLines(ctx, rageFlipped(text), 900);
  var totalHeight = 0;
  const lineHeight = 1.5;
  for (var i = 0; i < lines.length; i++) {
    totalHeight +=
      ctx.measureText(lines[i]).actualBoundingBoxAscent * lineHeight;
  }
  const yOffset = (canvasHeight - totalHeight) / 2;
  for (var i = 0; i < lines.length; i++) {
    const height = ctx.measureText(lines[i]).actualBoundingBoxAscent;
    ctx.fillText(lines[i], 600, yOffset + height * (i + 1) * lineHeight);
  }

  return canvas.toBuffer("image/png");
}
