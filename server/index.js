const connectToMongo = require("./connectdb");
const express = require("express");
var cors = require('cors');

connectToMongo();


const app = express();
const port = process.env.PORT||5000;

app.use(cors())

app.use(express.json());
//routes available

app.use("/api/auth", require("./routes/auth"));
app.use("/api/list", require("./routes/list"));


app.get("/", (req, res) => {
  res.send("Hello Satyam");
});

app.listen(port, () => {
  console.log(`INotes listening at http://localhost:${port}`);
});