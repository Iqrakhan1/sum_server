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
  const sub = a - b;

  res.send("Subtraction of " + a + " and " + b + " is = " + sub.toString());
});

app.get("/mul", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const mul = a * b;

  res.send("Multiplication of " + a + " and " + b + " is = " + mul.toString());
});

app.get("/division", (req, res) => { 
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (b === 0) {
    res.send("Division by zero is not allowed");
  } else {
    const div = (a / b).toFixed(3); 
    res.send("Division of " + a + " and " + b + " is = " + div.toString());
  }
});
