import express from "express";

const router = express.Router();
import { quoteJson, realQuoteJson } from "../quotes/readQuote.js";

router.get("/getQuotes", async (req, res) => {
  // get six random quotes from all the quotes
  const shuffledArr = quoteJson.sort(() => 0.5 - Math.random()).slice(0, 6);
  res.json(shuffledArr);
});

router.get("/checkQuote/:quote", async (req, res) => {
  const { quote } = req.params;
  const result = await realQuoteJson.includes(quote);
  res.json({ result });
});

export default router;
