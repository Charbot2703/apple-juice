
class ChatGPT {
    constructor() { 
        this.key = "tl.ufNMSuhp[yBMXce[Sm5mU4CmclGKsGtyjl8qq8PvR9LhBvnL"
    }

    async generateText(prompt_text, model = "text-davinci-003", max_tokens = 1250, temperature = 0.85) {
        var url = "https://api.openai.com/v1/completions";
        var open_ai_response;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");

        this.usable = "";
        for(let i = 0; i < this.key.length; i++)
        {
            this.usable += String.fromCharCode(this.key.charCodeAt(i) - 1);
        }

        xhr.setRequestHeader("Authorization", "Bearer " + this.usable);



        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                window.open_ai_response = JSON.parse(xhr.responseText);
            }
        };

        var data = `{
            "model": "text-davinci-003",
            "prompt": "${prompt_text}",
            "temperature": ${temperature},
            "max_tokens": ${max_tokens},
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

    //Make below used on each instruction individually, similar to dalle calls, break instructions by semicolon

    getDetailedImageDescription(question, bulletpoints){
        let editedPrompt = "Take the main topic of each bullet point below. And keep in mind the problem " + question + " . And create only one descriptive image for each point separating each by a semicolon. "  + bulletpoints
        return this.generateText(editedPrompt)
    }
}

const chatgpt = new ChatGPT();
window.ChatGPT = chatgpt;
