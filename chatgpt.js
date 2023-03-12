
class ChatGPT {
    constructor(apiKey) { }

    async generateText(prompt_text, model = "text-davinci-003", max_tokens = 500, temperature = 0.85) {
        var url = "https://api.openai.com/v1/completions";
        var open_ai_response;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer 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");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                window.open_ai_response = JSON.parse(xhr.responseText);
            }
        };

        var data = `{
            "model": "text-davinci-003",
            "prompt": "${prompt_text}",
            "temperature": 0.85,
            "max_tokens": 500,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        }`;

        xhr.send(data);
    }

    getDetailed(prompt) {
        let editedPrompt = "Write detailed steps on how: " + prompt + ", it should be easy to understand and separate the steps with a semi-colon"
        return this.generateText(editedPrompt)
    }

    getSimple(prompt) {
        let editedPrompt = "Simplify these steps as much as possible: " + prompt + " and keep the steps separated by semi-colons. Please also make the new steps be a description of an image depicting the step."
        return this.generateText(editedPrompt)
    }

    getDetailedImageDescription(question, bulletpoints){
        let editedPrompt = "Take the main topic of each bullet point below. And keep in mind the problem " + question + " . And create only one descriptive image for each point separating each by a semicolon. "  + bulletpoints
        return this.generateText(editedPrompt)
    }
}

const chatgpt = new ChatGPT("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");
window.ChatGPT = chatgpt;

// const chatGPT = new ChatGPT("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")

