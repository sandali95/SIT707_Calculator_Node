const express = require('express');
const app = express();
app.use(express.json());

const { add, subtract, multiply, divide } = require('./calculator');

function validateInput(req, res, next) {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: "Invalid input. 'a' and 'b' must be numbers." });
  }
  next();
}

app.post('/add', validateInput, (req, res) => {
  const { a, b } = req.body;
  res.json({ result: add(a, b) });
});

app.post('/subtract', validateInput, (req, res) => {
  const { a, b } = req.body;
  res.json({ result: subtract(a, b) });
});

app.post('/multiply', validateInput, (req, res) => {
  const { a, b } = req.body;
  res.json({ result: multiply(a, b) });
});

app.post('/divide', validateInput, (req, res) => {
  const { a, b } = req.body;
  try {
    res.json({ result: divide(a, b) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
