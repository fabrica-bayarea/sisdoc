import docs from "../../../json/docs.json";
export default function handler(req, res) {
  res.status(200).json(docs);
}
