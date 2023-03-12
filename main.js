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
        console.log("asdsadResponse:")
        console.log(response)

        //Break simple instructions block into array of steps


        // this.dalleImagePromise = window.DallE.getImage(input);

        // await new Promise(r => setTimeout(r, 8000));
        // response = window.dallEResponse;

        // console.log("Image things");
        // console.log(response);

        
        response = response.split(";");
        const images = [];
        
        for(let i = 0; i < response.length; i++)
        {
            this.dalleImagePromise = window.DallE.getImage(response[i], input);
            await new Promise(r => setTimeout(r, 13000));
            images.push(window.dallEResponse);

            console.log("Image " + i);
            console.log(images[i].data[0].url);
        }
        // for(let i = 0; i < response.length; i++)
        // {
        //     window.DallE.getImage(response[i]);
        //     console.log(response[i]);
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

