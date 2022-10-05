import { readFile } from "fs/promises";

let quoteJson;
let realQuoteJson;
let fakeQuotesJson;
const getQuote = async () => {
  try {
    realQuoteJson = JSON.parse(
      await readFile(new URL("./real-quotes.json", import.meta.url))
    );
    fakeQuotesJson = JSON.parse(
      await readFile(new URL("./fake-quotes.json", import.meta.url))
    );
    quoteJson = [...realQuoteJson, ...fakeQuotesJson];
  } catch (error) {
    console.log(error);
  }
};

getQuote();

export { quoteJson, realQuoteJson, fakeQuotesJson };
