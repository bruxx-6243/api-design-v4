import express from "express";
import morgan from "morgan";
import cors from "cors";

import { router } from "./router";
import { protect } from "./modules/auth";
import { createUser, singinUser } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("error"));
  }, 1);
});

app.use("/api", protect, router);

app.post("/register", createUser);
app.post("/signin", singinUser);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (err.type === "input") {
    return res.status(400).json({ message: "Bad Request" });
  }

  return res.status(500).json({ message: "Internal Server Error" });
});

export default app;
