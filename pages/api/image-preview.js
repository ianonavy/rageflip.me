import { getRageImage } from "../../lib/image";

export default function handler(req, res) {
  console.log("handler", req.query.text);
  const image = getRageImage(req.query.text);

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Disposition", "inline");
  res.send(image);
}
