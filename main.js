class Main {

    constructor(){}

    getPrompt()
    {
        this.inputPrompt = document.getElementById("input").value;
    }

    async PromiseExample(promise) {
        try {
          const value = await promise;
          console.log(value); //This is a promise  👈
        } catch (error) {
          console.log(error);
        }
      }

    async processInputFromUser(input)
    {
        //Get Detailed instructions
        this.detailedInstructionPromise = window.ChatGPT.getDetailed(input)
        await new Promise(r => setTimeout(r, 8000));
        let response = window.open_ai_response.choices[0].text;
        response = response.replace(/(\r\n|\n|\r)/gm, "");
        console.log("Response:")
        console.log(response)

        //window.open_ai_response.choices[0].text is response
        //Get Simple instruction block
        this.simpleInstructionPromise = window.ChatGPT.getSimple(response);

        await new Promise(r => setTimeout(r, 8000));
        response = window.open_ai_response.choices[0].text;
        response = response.substr(2)
        console.log("Simple Response")
        console.log(response)

        //Break simple instructions block into array of steps
        
        response = response.split(";");
        const images = [];
        
        for(let i = 0; i < response.length; i++)
        {
            // this.dalleImagePromise = window.DallE.getImage(response[i], input);
            // //await new Promise(r => setTimeout(r, 13000));
            // images.push(window.dallEResponse);

            // console.log("Image " + i);
            // console.log(images[i].data[0].url);
            this.pushImages(i, images, response)
        }
    }

    async pushImages(i, images, response)
    {
        console.log(i)
        this.dalleImagePromise = window.DallE.getImage(response[i], input);
        await new Promise(r => setTimeout(r, 13000));
        images.push(window.dallEResponse);

        console.log("Image " + i);
        console.log(images[i].data[0].url);
    }

    addAllInstructions(captions, imageUrls)
    {
        for (let i = 0; i < captions.length; i++)
        {
            this.addInstruction(captions[i], imageUrls[i]);
        }
    }

    addInstruction(caption, imageUrl)
    {
        console.log(caption)
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
    main.getPrompt();
    main.processInputFromUser(main.inputPrompt);
}