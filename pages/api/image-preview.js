import { getRageImage } from "../../lib/image";

export default function handler(req, res) {
  const image = getRageImage(req.query.text);
  res.status(200).write(image);
}
