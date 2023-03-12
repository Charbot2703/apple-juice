
class ChatGPT {
    constructor(apiKey) { }

    async generateText(prompt_text, model = "text-davinci-003", max_tokens = 2000, temperature = 0.85) {
        var url = "https://api.openai.com/v1/completions";
        var open_ai_response;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer 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");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                window.open_ai_response = JSON.parse(xhr.responseText);
                console.log(window.open_ai_response.choices[0].text);
            }
        };

        var data = `{
            "model": "text-davinci-003",
            "prompt": "${prompt_text}",
            "temperature": 0.85,
            "max_tokens": 2000,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        }`;

        xhr.send(data);
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

const chatgpt = new ChatGPT("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");
window.ChatGPT = chatgpt;

// const chatGPT = new ChatGPT("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")
console.log(chatgpt.getDetailed("How to ride a bike"));
// chatGPT.getSimple("1. Make sure the bike is setup correctly for your height. 2. Put on the appropriate safety equipment. 3. Get on the bike, with one foot on a pedal. 4. Push off with your foot on the ground. 5. As you are moving, place the other foot on the pedal. 6. Keep your feet on the pedals and use them to help keep the bike moving. 7. Move the handlebars in the direction you want to go. 8. Use the brakes to slow down or stop when needed.")

