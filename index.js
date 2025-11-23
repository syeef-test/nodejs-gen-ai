import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();



const client = new OpenAI({apiKey:process.env.GROQ_API_KEY,baseURL: "https://api.groq.com/openai/v1"});


// const response = await client.responses.create({
//     instructions:"give result in one word",
//     input:"what is the best color",
//     model:"openai/gpt-oss-20b",

// });


const response = await client.responses.create({
    input:[
        {role:'system',content:'answer in bengoli language'},
        {role:'developer',content:'gave a basic example in JS'},
        {role:'user',content:'what is coding'}
    ],
    model:"openai/gpt-oss-20b",

});

console.log(response.output_text);