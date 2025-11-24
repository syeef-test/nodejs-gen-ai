import OpenAI from "openai";

import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const prompt = "what is code";
const model = "openai/gpt-oss-20b";

const response = await client.responses.create({
  input: [{ role: "user", content: prompt }],
  model,
  //temperature: 1,
  //max_output_tokens: 200,
});
