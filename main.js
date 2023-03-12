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
<<<<<<< Updated upstream
=======
    sampleText = ['this is line 1 of our instructions this is it line 1 instruction.',
                    'this is line 2 of our instructions this is it line 2 instruction.',
                    'this is line 3 of our instructions this is it line 3 instruction.'];
    sampleUrls = ['https://oaidalleapiprodscus.blob.core.windows.net/private/org-wmxpejuqY1shaXhwzCgDBsJM/user-CKiD4DM9GEB2g381E1cxw9gw/img-sTaJFQufOJbRC7MfZhRHC2yF.png?st=2023-03-12T02%3A22%3A04Z&se=2023-03-12T04%3A22%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-12T01%3A13%3A27Z&ske=2023-03-13T01%3A13%3A27Z&sks=b&skv=2021-08-06&sig=UtpfrLNbTy1OzJY0%2BK60tjiA%2BFIWQOwj6WM6d3XX1FY%3D',
                    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-wmxpejuqY1shaXhwzCgDBsJM/user-CKiD4DM9GEB2g381E1cxw9gw/img-HYJYNtWjekzOKcm8uRuyaIas.png?st=2023-03-12T02%3A22%3A16Z&se=2023-03-12T04%3A22%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-11T22%3A54%3A44Z&ske=2023-03-12T22%3A54%3A44Z&sks=b&skv=2021-08-06&sig=/tpSTF75IfJdqy00T9NoyMHb497ucwASyPjXGVW4I0g%3D',
                    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-wmxpejuqY1shaXhwzCgDBsJM/user-CKiD4DM9GEB2g381E1cxw9gw/img-AuJTAgqNnw4xI2OYOIXwpKaq.png?st=2023-03-12T02%3A22%3A43Z&se=2023-03-12T04%3A22%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-12T00%3A09%3A11Z&ske=2023-03-13T00%3A09%3A11Z&sks=b&skv=2021-08-06&sig=Sn7EI/JGjbWFdx0aLhKTKWWh%2Bw9cee0J2pM7ZURi8gc%3D'];
    main.addAllInstructions(sampleText, sampleUrls);
>>>>>>> Stashed changes
    main.getPrompt();
    main.processInputFromUser(main.inputPrompt);
}