import { getRageImage } from "../../lib/image";

export default function handler(req, res) {
  const image = getRageImage(req.query.text);

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Disposition", "inline");
  res.send(image);
}
