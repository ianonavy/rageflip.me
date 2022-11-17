import { getRageImage } from "../../lib/image";

export default function handler(req, res) {
  const stream = getRageImage(req.query.text);
  stream.pipe(res.status(200));
}
