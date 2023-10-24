// 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


const OpenAI = require ('openai');
const express = require('express');
const bodyParser= require('body-parser')
const cors = require('cors')


const openai = new OpenAI({
  apiKey: "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"
});

const app =express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080

app.post('/',async(req,res)=>{
  const {message}=req.body;
  console.log(message,"message")
  console.log(message)
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature:0.5,
  });
  res.json({
    // data:completion
    message:completion.choices[0].text,
  })
});

app.listen(port,()=>{
  console.log(`Ex app listening at https://localhost:${port}`)
});
 

