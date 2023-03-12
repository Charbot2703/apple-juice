class DallE {
  constructor() {
    this.key = "tl.ufNMSuhp[yBMXce[Sm5mU4CmclGKsGtyjl8qq8PvR9LhBvnL"
  }

  async getImage(prompt_text, input, i) {
    var url = "https://api.openai.com/v1/images/generations";
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
            window.dallEResponse = JSON.parse(xhr.responseText);
            console.log(window.dallEResponse)
            window.images.push([window.dallEResponse, i])
        }
    };

    var data = `{
        "prompt": "'${prompt_text}', in relation to accomplishing the following task: ${input}. ",
        "n": 1,
        "size": "512x512"
    }`;
    
    xhr.send(data);
}
}

let dalle = new DallE();
window.DallE = dalle;