import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import "express-async-error";
import cors from "cors";
//security
import helmet from "helmet";
import xss from "xss-clean";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

import quoteRoute from "./routes/quoteRouter.js";
import notFound from "./error/notFoundError.js";
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(express.json());
app.use(helmet()); //secure headers
app.use(xss()); //sanitize input , prevent cross site scripting

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1/ye-said", quoteRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use(notFound);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
