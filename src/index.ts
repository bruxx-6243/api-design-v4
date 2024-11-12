import app from "./server";
import { PrismaClient } from "@prisma/client";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
