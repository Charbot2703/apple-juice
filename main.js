class Main {

    constructor()
    {
        // Init api object stuff
        this.gpt = window.ChatGPT;
        this.dalle = window.DallE;
    }

    getPrompt()
    {
        this.inputPrompt = document.getElementById("input").value;
    }

    processInputFromUser(input)
    {
        console.log(input);
        //Get Detailed instructions
        this.detailedInstructionPromise = this.gpt.getDetailed(input);
        this.detailedInstructionPromise.then((value) =>{
            console.log(value);
            console.log("ASIDJASJHFJAD");
        });
        //this.simpleInstructionBlock = "Riding a bike is a great way to get around. Here are the steps you need to follow to ride a bike:\n1. Begin by adjusting the seat so that it is at a comfortable height for you.\n";
        //Get Simple instruction block
        //this.simpleInstructionPromise = this.gpt.getSimple(this.detailedInstructions);

        //Break simple instructions block into array of steps


        //his.simpleInstructionBlock = this.simpleInstructionBlock.split(/\r?\n/);

        
        // for(let i = 0; i < this.simpleInstructionBlock.length; i++)
        // {
        //     this.dalle.getImage(this.simpleInstructionBlock[i]);
        //     console.log(this.simpleInstructionBlock[i]);
        // }

        // console.log(this.simpleInstructionBlock);
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
    main.addAllInstructions(sampleCap, sampleUrl);
    main.getPrompt();
    main.processInputFromUser(main.inputPrompt);
}