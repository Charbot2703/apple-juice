class Main {

    constructor()
    {
        // Init api object stuff
        //this.gpt = new ChatGPT();
        //this.dalle = new DallE();
    }

    getPrompt()
    {
        this.inputPrompt = document.getElementById("input").value;
    }

    processInputFromUser(input)
    {
        console.log(input);
        //Get Detailed instructions
        //this.detailedInstructionBlock = this.gpt.getDetailed(input);
        this.simpleInstructionBlock = "Riding a bike is a great way to get around. Here are the steps you need to follow to ride a bike:\n1. Begin by adjusting the seat so that it is at a comfortable height for you.\n";
        //Get Simple instruction block
        //this.simpleInstructionBlock = this.gpt.getSimple(input);

        //Break simple instructions block into array of steps


        this.simpleInstructionBlock = this.simpleInstructionBlock.split(/\r?\n/);

        
        for(let i = 0; i < this.simpleInstructionBlock.length; i++)
        {
            this.dalle.getImage(this.simpleInstructionBlock[i]);
            console.log(this.simpleInstructionBlock[i]);
        }

        console.log(this.simpleInstructionBlock);
    }
}

//Get the input from the html file
let main = new Main();

function mainFunction()
{
    main.getPrompt();
    main.processInputFromUser(main.inputPrompt);
}

