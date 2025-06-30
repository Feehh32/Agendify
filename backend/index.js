const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const registerRoute = require("./routes/register");

app.use(cors());
app.use(express.json());
app.use("/api", registerRoute);

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
