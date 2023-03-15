# Apple Juice - Instruction/Troubleshooter AI
![](https://i.ibb.co/rdGjVwN/Header-Image.png)

Our team's Philly CodeFest 2023 challenge was to use AI image generation to help users troubleshoot their problems. We have created a website that allows users to input a problem they are experiencing, and in response uses AI to generate a comprehensive step-by-step guide with accompanying images to guide the user to a solution.

# Inspiration

With improving artificial intelligence technologies on the rise - such as GPT3 and DALL·E 2 - integrating AI is becoming easier by the day. In the future, we expect many upcoming breakthroughs to come from the advancement of AI generation, and learning to utilize these technologies to create engaging and informative content is crucial.

# What It Does

We designed a website where users input a problem they are trying to troubleshoot. An example might be "My router is slow". Using the input, we create a set of instructions for the user along with images that correspond with each step, guiding the user to a solution for their problem. Searching online for solutions for specific issues can be frustrating and challenging, especially when you don't know exactly what you are looking for. We hope that having a convenient and user-focused website will reduce the amount of time people spend searching for solutions as well as give them the proper solution on the first try.

# How It Works

To build our project we used JavaScript, HTML, and the OpenAI API. Our website communicates with [OpenAI ](https://platform.openai.com/docs/introduction) to generate step-by-step processes our users can follow to solve real-world problems, using the ChatGPT model. We then use ChatGPT to generate effective prompts for related image generation, and provide these prompts to DALL·E to generate image. Below is a preview of our project.

> **Enter the problem to troubleshoot...**

![](https://i.ibb.co/47cXsnY/ezgif-com-video-to-gif.gif)

> **Receive the steps to solve (with pictures)!!**

![](https://i.ibb.co/YN60WFc/ezgif-com-video-to-gif-1.gif)

*It's really that easy!*

# Challenges We Ran Into

- Difficulty in bringing OpenAI to correctly interact with our website
   * Challenging to get the API to connect with our website in real-time
   * Many unfamiliar bugs
- Difficulty getting the AI to process exactly what we want
    * Generating concise, but complete steps for the user
    * Generating easy-to-follow images with our steps
    * Ensuring our prompts provide enough data to generate relevant images

# Our Accomplishments

We are most proud that we were able to bring the separate components of our project to communicate. We each had specific roles to play in early development, and bringing all our pieces together as one final product was a gratifying experience. We are also proud that we were able to properly connect the OpenAI API to our project. No one on our team has experience with OpenAI, so creating a easy-to-use interface utilizing the ChatGPT and DALL·E libraries in conjunction was a huge accomplishment for our team.

# What we learned

- Product planning as a team
- The inner workings of OpenAI

# Future of our Product

- Improve more in-depth steps to guide the user to a solution
- Allow user to provide more information to fix current solutions given
- Improve our image processing to provide more "guideful" images
- Create an app for user convenience

# Try it out!

You can start solving your problems with Apple Juice here: https://charbot2703.github.io/apple-juice/
