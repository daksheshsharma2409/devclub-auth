import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Recived via POST");
});

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
