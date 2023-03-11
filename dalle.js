class DallE {
  constructor() {}
  async getDalleResponse(inpPrompt) {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    try
    {
      const response = await openai.createImage({
        prompt: inpPrompt,
        n: 1,
        size: "512x512",
      });

      console.log(response.data.data[0].url)
      return response.data.data[0].url
    }
    catch(error)
    {
      throw(error);
    }
  }
}