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
}

//Get the input from the html file
let main = new Main();

function submit()
{
    main.getPrompt();
    main.processInputFromUser(main.inputPrompt);
}

