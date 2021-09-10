import express from "express";
import connectDB from "../config/database";
import slashURL from "./routes/api/slashURL"
import redirectToFull from "./routes/api/redirectToFull"
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use("/api/slashURL", slashURL);
app.use("/api", redirectToFull);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
