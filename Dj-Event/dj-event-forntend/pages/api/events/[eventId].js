const { events } = require("./data.json");

export default function handler(req, res) {
  const evt = events.filter((ev) => ev.eventId === req.query.eventId);
  console.log(evt);
  if (req.method === "GET") {
    res.status(200).json({ evt });
  } else {
    res.setHeader("Allowe", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
