import express from "express";

const router = express.Router();
import {
  quoteJson,
  fakeQuotesJson,
  realQuoteJson,
} from "../quotes/readQuote.js";

router.get("/getQuote", async (req, res) => {
  const singleQuote = await quoteJson[
    Math.floor(Math.random() * quoteJson.length)
  ];

  res.json({ quote: singleQuote });
});

router.get("/checkQuote/:quote", async (req, res) => {
  const { quote } = req.params;
  const result = await realQuoteJson.includes(quote);
  res.json({ result });
});

export default router;
