const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);


async function start(prompt){
    const model = "text-davinci-003"
    const temperature = 0.85
    tokens = 100

    const response = await openai.createCompletion({
        model: model,
        prompt: prompt,
        temperature: temperature,
        max_tokens: tokens,
      });

      console.log(response.data.choices[0].text)
}

start("Steps on how to ride a bike")