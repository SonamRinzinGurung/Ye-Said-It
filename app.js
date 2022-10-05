import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import "express-async-error";
import quoteRoute from "./server/routes/quoteRouter.js";
import notFound from "./server/error/notFoundError.js";
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/api/v1/ye-said", quoteRoute);

app.use(notFound);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
