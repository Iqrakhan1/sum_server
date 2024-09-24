const express = require("express");
const cors = require("cors"); // Add this line
const app = express();

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});
