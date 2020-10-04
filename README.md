# koper-game

## Project description

This is part of the Koper hiring process. The task is to develop a rock,
paper, scissors, lizard, spock game. Here is an explanation of the game
by Sheldon (The Big Bang Theory), [video](https://www.youtube.com/watch?v=abQj0pQkSOY).


The naive solution for this type of game would be to do a bunch of if/else
statements to check who won. But there is a cleaner way to do this, that
is using a matrix where each line indicates what the human chose and the
columns what the computer chose. If the human wins, the cell value will
be 1, 0 if its a tie, and 2 if the human lose. In this case, suppose that
in a play the human chose "scissors", indicated by line 0, and the
computer "rock", indicated by column 2, then the matrix[0][2] = 2.

There could be a small improvement in the space complexity though, as we
don't need the whole matrix to know all the results. We only need to know
all the ways the human can win (10 alternatives). With that, we can
deduce the defeats because they are the inverse of the wins, and the ties
are whenever both, human and computer, do the same choice. But, for
simplicity, I decided to just use the whole matrix.

## Technology stack

To complete this project it was used Typescript, React and NextJS. The
unit tests were done using the package React Testing Library.

## Run the project locally

To run this project on your own machine, you first need to clone the repo.

```shell
git clone git@github.com:clarammdantas/koper-game.git
```

Then, inside the root directory of the project, run the NextJS app.

```shell
npm run dev

# or

yarn dev
```

## Running tests

Inside the root directory, or below it, run:

```shell
npm test

# or

yarn test
```

## Access the project on the internet

This project was also deployed in Heroku and can be accessed through this
URL https://sleepy-citadel-55985.herokuapp.com/
