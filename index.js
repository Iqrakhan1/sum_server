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

  res.send("Sum of " + a + " and " + b + " is = " + sum.toString());
});
app.get("/sub", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a - b;

  res.send("Substraction  of " + a + " and " + b + " is = " + sum.toString());
});
app.get("/mul", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a * b;

  res.send("Multiplication of " + a + " and " + b + " is = " + sum.toString());
});
app.get("/div", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a / b;

  res.send("division of " + a + " and " + b + " is = " + sum.toString());
});
