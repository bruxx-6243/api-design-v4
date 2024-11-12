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

app.get("/", function (_, res) {
  res.status(200).json({ message: "API is running" });
});

app.use("/api", protect, router);

app.post("/register", createUser);
app.post("/signin", singinUser);

export default app;
