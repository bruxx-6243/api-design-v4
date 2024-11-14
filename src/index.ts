import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3001;

import app from "./server";

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
