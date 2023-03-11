const { Configuration, OpenAIApi } = require("openai");

class OpenAI {
    constructor(apiKey) {
        this.openai = new OpenAIApi(new Configuration({ apiKey }));
    }

    async generateText(prompt, model = "text-davinci-003", max_tokens = 2000, temperature = 0.85) {
        try {
            const response = await this.openai.createCompletion({
                model,
                prompt,
                max_tokens,
                n: 1,
                temperature,
            });
            console.log(`request cost: ${response.data.usage.total_tokens} tokens`);
            console.log(response.data.choices[0].text)
            return response.data.choices[0].text;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    getDetailed(prompt) {
        let editedPrompt = "Write steps on how: " + prompt + ", it should be easy to understand and each step is seperated by a newline"
        return this.generateText(editedPrompt)
    }

    getSimple(prompt) { 
        let editedPrompt = "Simplify these steps: " + prompt
        return this.generateText(editedPrompt)
    }
}


const openAI = new OpenAI("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")
openAI.getDetailed("How to ride a bike")
openAI.getSimple("1. Make sure the bike is setup correctly for your height. 2. Put on the appropriate safety equipment. 3. Get on the bike, with one foot on a pedal. 4. Push off with your foot on the ground. 5. As you are moving, place the other foot on the pedal. 6. Keep your feet on the pedals and use them to help keep the bike moving. 7. Move the handlebars in the direction you want to go. 8. Use the brakes to slow down or stop when needed.")

