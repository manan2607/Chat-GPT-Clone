// 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

// const { Configuration, OpenAIApi } = require ("openai");
// const configuration = new Configuration({
//     organization: "org-ydknQ5FfTO95KA9kt2hqEgLP",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// async function main() {
//   const response = await openai.createCompletion({
//     model: "gpt-3.5-turbo-instruct",
//     prompt: "Say this is a test.",
//     max_tokens: 7,
//     temperature: 0,
//   });
//   console.log(response.data.choices[0].text);
// }
// main();


const OpenAI = require ('openai');

const openai = new OpenAI({
  apiKey: "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"
});

async function callApi(){
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "This story begins",
    max_tokens: 30,
  });
  console.log(completion.choices[0].text);
}

callApi()