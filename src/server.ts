import express from "express";
import morgan from "morgan";
import cors from "cors";

import { router } from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (_, res) {
  res.status(200).json({ message: "API is running" });
});

app.use("/api", router);

export default app;
