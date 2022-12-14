import { ImageResponse } from "@vercel/og";
import { rageFlipped } from "../../lib/flip";
import Head from "next/head";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const font = fetch(
  new URL(`../../assets/NotoSansKannada.otf`, import.meta.url)
).then((res) => res.arrayBuffer());
const font2 = fetch(new URL(`../../assets/rage.woff`, import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export default async function (req, res) {
  const { searchParams } = new URL(req.url);
  const hasText = searchParams.has("text");
  const text = hasText ? searchParams.get("text")?.slice(0, 100) : "";
  const fontData = await font;
  const fontData2 = await font2;

  const fontSize = Math.max(Math.round(84 - text.length), 36);

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100%",
          width: "100%",
          fontSize: fontSize,
          fontFamily: '"Noto Sans"',
          fontWeight: 400,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {rageFlipped(text)}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans Kannada",
          data: fontData,
          style: "normal",
        },
        {
          name: "Noto Sans JP",
          data: fontData2,
          style: "normal",
        },
      ],
    }
  );
}
