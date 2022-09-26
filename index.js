var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var userName = readLineSync.question(chalk.black.bgGreen.bold("Hey! May i have your name please?\n"));

console.log(chalk.bgYellow.whiteBright("welcome to LearnAndEarn quiz competition " + userName));

console.log(chalk.yellowBright("\nThis quizz contains 15 questions.For every right answer you will get 10INR and for every wrong answer you will loose 5INR. Attempt all question from all the level and send the screenshots to your friends and say how much you have earned.HurryUp it will be fun.Yayy!!! .\n\n"))

easy = [
  {
    question: "Question 1 : Who is the fastest man in the world??\n" + "1. Maurice Greene \n" + "2. Usain Bolt \n" + "3. Nesta Carter\n" + "4. Trayvon Bromell \n",
    answer: 2
  },
  {
    question: "Question 2: Who was the first woman Prime Minister of India?\n" + "1. Kalpana Chawla \n" + "2. Indira Gandhi \n" + "3. Pratibha Patil \n" + "4.Kiran Bedi \n",
    answer: 2
  },
  {
    question: "Question 3: What is the National Flower of India? \n" + "1. Lotus \n" + "2. Rose \n" + "3. SunFlower \n" + "4. Jasmine \n",
    answer: 1
  },
  {
    question: "Question 4: In which continent is India located? \n" + "1. Antarctica \n" + "2. Asia \n" + "3. Africa \n" + "4. Europe \n",
    answer: 2
  },
  {
    question: "Question 5: Which is the hottest planet in our solar system? \n" + "1. Mercury \n" + "2. Jupiter \n" + "3. Saturn \n" + "4. Venus \n",
    answer: 4
  }
]

intermediate = [
  {
    question: "Question 1:	At which age Gautham Buddha got Nirvana? \n" + "1. 25 \n" + "2. 30 \n" + "3. 35 \n" + "4. 18 \n",
    answer: 3
  },
  {
    question: "Question 2: Who is known as the father of history? \n" + "1. Herodotus \n" + "2. Socrates \n" + "3. Plato \n" + "4. Aristotle \n",
    answer: 1
  },
  {
    question: "Question 3: The Battle of Plassey was fought in \n" + "1. 1748 \n" + "2. 1782 \n" + "3. 1757 \n" + "4. 1764 \n",
    answer: 3
  },
  {
    question: "Question 4:  What is the square root of 144? \n" + "1. 14 \n" + "2. 12 \n" + "3. R.C. 16 \n" + "4. 10 \n",
    answer: 2
  },
  {
    question: "Name the acid that is secreted in the stomach? \n" + "1. Uric Acid \n" + "2. Sulphuric Acid \n" + "3. Hydrochloric Acid \n" + "4. Amino Acid \n",
    answer: 3
  }
]

hard = [
  {
    question: "Question 1: Where is ‘Great Bear Lake’ found in the world? \n" + "1. India \n" + "2. Canada \n" + "3. China \n" + "4. Russia \n",
    answer: 2
  },
  {
    question: "Question 2: The intersecting lines drawn on maps and globes are \n" + "1. latitudes \n" + "2. longitudes \n" + "3. geographic grids \n" + "4. None of the above \n",
    answer: 3
  },
  {
    question: "Question 3: Which is the mineral found in teeth and limestones? \n" + "1. Magnetite \n" + "2. Calcium \n" + "3. Gypsum \n" + "4. None of the above \n",
    answer: 2
  },
  {
    question: "Question 4: 'Natya - Shastra' the main source of India's classical dances was written by \n" + "1. Nara Muni \n" + "2. Bharat Muni \n" + "3. Abhinav Gupt \n" + "4. Tandu Muni \n",
    answer: 2
  },
  {
    questioin: "Question 5: The Rath Yatra at Puri is celebrated in honour of which Hindu deity \n" + "1. Ram \n" + "2. Vishnu \n" + "3. Shiva \n" + "4. Jaganath \n",
    answer: 4
  }
]



function userChoice() {
  var userWords = readLineSync.question("Are you ready to Earn some money with us?" + chalk.bgMagenta.bold("yes/no \n"));
  if (userWords.toLowerCase() === "yes") {
    function motherSwear() {
      var Swear = readLineSync.question(" Yaar cheat toh nahi karoge na?" + chalk.bgMagenta.bold("i will not/i will \n"));
      if (Swear.toLowerCase() === "i will not") {
        console.log(chalk.blue.bold("Best of luck\n"));
        chooseQuestion();
      } else {
        console.log(chalk.bgRed.bold("you are a  cheater! we don't play with cheaters."));
      }
    }
    motherSwear();

  } else {
    console.log("Sorry to see you go. We will expect you soon!")
  }
}

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer == answer) {
    console.log(chalk.green("Right answer"));
    score = score + 1;
  } else {
    console.log(chalk.red("wrong answer"));
    console.log(chalk.green("correct answer is: " + answer));
    score = score - 1;
  }
  console.log("current score: " + score);
  console.log("------------------");
}


function chooseQuestion() {
  var chooseOption = readLineSync.question(chalk.bgWhite.black('Enter your choice of number(1,2 or 3) .\n 1.Easy \n 2.Intermediate \n 3.Hard \n\n'));
  if (chooseOption == 1) {
    for (var i = 0; i < easy.length; i++) {
      play(easy[i].question, easy[i].answer)
    }
  } else if (chooseOption == 2) {
    for (var i = 0; i < intermediate.length; i++) {
      play(intermediate[i].question, intermediate[i].answer)
    }
  } else if (chooseOption == 3) {
    for (var i = 0; i < hard.length; i++) {
      play(hard[i].question, hard[i].answer)
    }
  }

}

userChoice();
console.log(chalk.bgYellow.white("Your Final score is: " + score))



//____________________________________________________________________
