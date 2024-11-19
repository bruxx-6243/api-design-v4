import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";

const PORT = config.port;

import app from "./server";

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
