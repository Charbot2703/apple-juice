class Main {

    constructor(){}

    getPrompt()
    {
        this.inputPrompt = document.getElementById("input").value;
    }

    async processInputFromUser(input)
    {
        window.dallEResponse = [];
        window.open_ai_response = null;
        //Get Detailed instructions
        this.detailedInstructionPromise = window.ChatGPT.getDetailed(input)
        while(window.open_ai_response == null)
        {
            await new Promise(r => setTimeout(r, 1000));
        }
        let responseDetail = window.open_ai_response.choices[0].text;
        responseDetail = responseDetail.replace(/(\r\n|\n|\r)/gm, "").replace(/"/g, "'")
        console.log("Response:")
        console.log(responseDetail)

        window.open_ai_response = null;
        this.detailedImageInstructions = window.ChatGPT.getDetailedImageDescription(input, responseDetail)
        while(window.open_ai_response == null)
        {
            await new Promise(r => setTimeout(r, 1000));
        }
        let detailedImageResponse = window.open_ai_response.choices[0].text;
        detailedImageResponse = detailedImageResponse.replace(/(\r\n|\n|\r)/gm, "").replace(/"/g, "'");
        console.log(detailedImageResponse)
        
        let response = detailedImageResponse.split(";");
        window.images = [];
        
        for(let i = 0; i < response.length; i++)
        {
            this.pushImages(i, response)
        }

        while(window.images.length < response.length)
        {
            await new Promise(r => setTimeout(r, 1000));
        }
        console.log("All images received")
        document.getElementById("instructions-grid").innerHTML = '';
        responseDetail = responseDetail.split(";");
        for(let i = 0; i < responseDetail.length; i++)
        {
            for(let j = 0; j < window.images.length; j++)
            {
                if(window.images[j][1] == i)
                {
                    this.addInstruction(responseDetail[i], window.images[j][0].data[0].url);
                }
            }
        }
    }

    async pushImages(i, response)
    {
        this.dalleImagePromise = window.DallE.getImage(response[i], input, i);
    }

    addInstruction(caption, imageUrl)
    {
        // Create a new instruction element
        const instructionElement = document.createElement("div");
        instructionElement.className = "grid-item";

        // Add the caption div
        const captionElement = document.createElement("div");
        captionElement.className = "instruct";
        const actualCaption = document.createElement("p");
        actualCaption.innerHTML = caption;
        captionElement.appendChild(actualCaption);

        // Add the image div
        const imageElement = document.createElement("div");
        imageElement.className = "image";
        const actualImage = document.createElement("img");
        actualImage.src = imageUrl;
        imageElement.appendChild(actualImage);

        // Append to instructions element
        instructionElement.appendChild(captionElement);
        instructionElement.appendChild(imageElement);

        // Append the created instructions to the full grid
        document.getElementById("instructions-grid").appendChild(instructionElement);
    }
}

//Get the input from the html file
let main = new Main();

function submit()
{
    try {
        // Display loading message
        document.getElementById("instructions-grid").innerHTML = '';
        const loadingMsg = document.createElement("p");
        loadingMsg.className="status-display";
        loadingMsg.innerHTML = "Generating your instructions...";
        document.getElementById("instructions-grid").appendChild(loadingMsg);

        main.getPrompt();
        main.processInputFromUser(main.inputPrompt);
    }
    catch(error){
        // Display failure message
        document.getElementById("instructions-grid").innerHTML = '';
        const errorMsg = document.createElement("p");
        errorMsg.className="status-display";
        errorMsg.innerHTML = "Error encountered generating instructions.";
        document.getElementById("instructions-grid").appendChild(instructionElement);
    }
}