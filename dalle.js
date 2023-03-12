class DallE {
  constructor() {}

  async getImage(prompt_text, input) {
    var url = "https://api.openai.com/v1/images/generations";
    var open_ai_response;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer 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");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            window.dallEResponse = JSON.parse(xhr.responseText);
            console.log(window.dallEResponse)
        }
    };

    var data = `{
        "prompt": "${prompt_text} as a step in accomplishing the following task: ${input}",
        "n": 1,
        "size": "512x512"
    }`;
    
    console.log(prompt_text)

    xhr.send(data);
}
}

let dalle = new DallE();
window.DallE = dalle;