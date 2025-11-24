import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
import {  encoding_for_model } from "tiktoken";



const client = new OpenAI({apiKey:process.env.GROQ_API_KEY,baseURL: "https://api.groq.com/openai/v1"});


// const response = await client.responses.create({
//     instructions:"give result in one word",
//     input:"what is the best color",
//     model:"openai/gpt-oss-20b",

// });

const prompt = 'what is coding';
const model = 'openai/gpt-oss-20b';
const response = await client.responses.create({
    input:[
        //{role:'system',content:'answer in bengoli language'},
        //{role:'developer',content:'gave a basic example in JS'},
        {role:'user',content:prompt}
    ],
    model:model,

});

console.log(response);

function calculateToken(){
    const encoder = encoding_for_model(model);
    const tokenData = encoder.encode(prompt);
    console.log(tokenData);
}

calculateToken();