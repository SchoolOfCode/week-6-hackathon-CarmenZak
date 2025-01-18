
## Space Escape! 

Welcome to my hackathon project exploring Test Driven Development.

## Overview

~ To create a programming challenge for others to solve, in a similar style to the ones on Codewars. 
~To write unit tests to validate solutions. Then share the challenge with other bootcampers for them to solve. If a submitted solution passes all your tests, it will be considered a correct solution - just like on Codewars. 

## Team Approach

We decided as a team that we would like to have a theme that is continous across the three challenges, and eventually decided on an escape room style but in space. You can find parts1:
https://github.com/SchoolOfCode/week-6-hackathon-Jackafella1
and 3:
https://github.com/SchoolOfCode/week-6-hackathon-Holl4444/blob/main/PROJECT_PRESENTATION.md of the story by following the links.
More details can be found in the README file.

## Planning Phase

The initial team brainstorming phase involved researching elements of a good codewars kata, followed by possible themes that we could adopt. Once we had a long list, we used dot voting to rank our top 3 and eventually settled on the space theme. We then brainstormed ideas for katas, before each picking the challenge we wanted to do. 
Once we each had our own kata challenge, we then looked at how to connect the 3 individual katas to fit our theme. I then set about planning my kata and tests. However I soon ran into problems as I couldn't settle on what exactly I wanted the user to do: find the odd numbers? find the sum of the positive numbers? I knew I wanted the answer to be a 7 digit number and then I worked out from there what I wanted the story to be, which in turn helped guide me towards the first test I would write. I used the `Vitest` package in VS Code to write my tests. 

## My Story:
## MVPs and Challenges

Once I settled on exactly what the challenge was that I wanted the user to solve, I set about writing my MVPs:

// MVP 1 - write a failing test then alter the test to check the number returned is 1783995
//MVP 2 -test should return odd numbers concatenated together
//MVP 3 - test should return a number
//MVP 3 - test only accepts positive numbers, avoiding NaN and Infinity values
//MVP 4 - test should return 7 digit number
//MVP 5 - test for arrays with non-integer values

From this initial list, I used the TDD approach:
1. Write a failing test
2. Make the test pass
3. Refactor

Initially, I only had 2 MVPs as the main test I wanted was to check for odd numbers concatenated to form one long number. However when I tried to solve the challenge (when trying to meet MVP1, I had to solve the kata to see if my test worked), I couldn’t get my solution to pass. I then discovered that by joining the numbers together, the result was a string not an integer, so I had to convert the result into an integer. This led to my next MVP - "test should return a number". In this way, each of the following MVPs was the result of thinking of ways the user could try and break the kata. I used LLMs such as Co-pilot to help me with this. I asked for ideas for tests that I hadnt considered and this is where the idea came to create tests:
- for arrays with no odd numbers
- that only accept positive numbers, avoiding NaN and Infinity values
- should return 7 digit number
- for arrays with non-integer values

I met MVPs 1-4 although when I tried to write a test for MVP 5 (test for arrays with non-integer values), the test kept failing and I ran out of time. 

This is the final version of my kata story: 

*Find the secret code!*

*// Congratulations on making it this far! You have to find the code to open the portal. How? You need to find the secret number hidden in the secret array. *
*// Write a function that returns all of the odd integers in the hidden array concatenated together as one 7 digit integer.*
*//The portal code will appear in the terminal once you've run the tests. Good luck! *

## Screenshots
![All tests] (C:\Users\carme\repos\Bootcamp-Hackathons\week-6-hackathon-CarmenZak\Images\All_tests.JPG)

## Learning Points

Although we settled on the group theme and individual challenges quickly, I struggled to find a structure to my kata at first. Moving forward, I would focus on a clear idea and avoid over-complicating the task. 
I didn't see why I would need more than 1 test for my kata, as I was using a hard-coded array. On researching the matter I found that even if you have a pre-set array, it's important to have comprehensive tests to ensure your function behaves correctly under various conditions.

TDD is challenging - its a longer process requiring you to consider how your code can be broken. In the long run, it's an excellent way of really understanding code and how it can go wrong. It makes your code more robust which is the aim!

## Stretch Goals

I used V8 in Vitest to run a coverage test, something which may not have been so important for this task as I met 100% coverage with one test! However, it's useful moving forward to be able to have an idea of how much coverage one's test cover. 
I would have liked to get the 'test for non-integer values' working.
If I had a UI, then I would have liked to use Playwright for running tests as it's a great tool for end-to-end testing.

## Acknowledgements

 - [Holly Goulbourne](https://github.com/Holl4444)
 - [Jermaine Jack](https://github.com/Jackafella1)
 

