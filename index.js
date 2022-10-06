const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})