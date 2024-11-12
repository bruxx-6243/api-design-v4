import express from "express";
import { router } from "./router";

const app = express();

app.get("/", function (_, res) {
  res.status(200).json({ message: "API is running" });
});

app.use(express.json());
app.use("/api", router);

export default app;
