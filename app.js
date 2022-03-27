const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server working at port ${PORT}`);
});

