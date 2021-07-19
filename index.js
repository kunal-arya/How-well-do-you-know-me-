var readlineSync = require ("readline-sync");



var chalk = require ("chalk")

var name = readlineSync.question(chalk.bgBlue(" What is Your Name: ") + " ")

console.log ("\nHi!! " + name + "\n")

//  Asking the basic questions and creating a loop for wrong Input

do{
var q2 = readlineSync.question(chalk.bgBlue("do You know me?(y/n) ") + " ")
var a = 0
if ( q2 === "y"){
  console.log ("\nThat Great!! We are going to play a quiz \nLet's Start\n\n");a = " ";b = " "
} else if ( q2 === "n"){
  console.log("\n\nIt's Okay! I don't know you either ")
  do{
    var b = 0;
   var q3 = readlineSync.question(chalk.bgRed("\nDO you want to Play a Quiz on my Life?(y/n) ") + " ")
   if ( q3 === "y"){
     console.log ( "\nThat's Great!! Let's Start");a = " " ;b = " "
   } else if ( q3 === "n"){
     console.log ("\nWell!! We are going to play it anyway\n"); a = " "
   } else {console.log(chalk.red("\n\nError!!! Plz write Only \ny = Yes \nn = No")); a = " "}
  } while ( b === 0 )
}  else {console.log("\nError!!! Plz write Only \ny = Yes \nn = No\n")} 
} while ( a === 0 )

console.log (chalk.bgMagenta.bold("\n\n ============================================== \n --------- Welcome to the MY Quiz ------------- \n ============================================== "))

console.log ("\nHi!! " + name + "\n" + chalk.red("Plz Read all the Instructions Below:") + "\n1) Plz type only " + chalk.yellow(" a ,b ,c & d ") + chalk.blue(" (Any answer other than these 4 are not Accepted)") + "\n2) There will be a " + chalk.yellow(" negative marking of 0.25 ")  + " for every wrong answer \n3) For every Right answer you will be rewarded with 1 mark \n4) There are " + chalk.yellow(" 3 Level ") +  " in this game \n5) To clear " +  chalk.yellow(" level 1 ") + " , You will need to " + chalk.yellow(" score 4 ") + " \n6) To clear " +  chalk.yellow(" level 2 ") + " , You will need to " + chalk.yellow(" score 8 ") )

console.log("\n==============================================")

//  Writing Function

function play(question,answer){
  var ques = readlineSync.question(question)

  if ( ques === answer ){
    console.log (chalk.bgBlue("\nYou are Right!! \n"))
    score = score + 1
  } else { 
    console.log (chalk.bgRed("\nYou are Wrong!! \n"))
    score = score - 0.25
  }
}

//  Highscore 

var highScore = [
  {name: "Sheetal" , score : "11.5" },
{name: "Hitesh" , score : "11"},
{name: "shubham" , score : "10.5"},
{name: "Manoj" , score : "10"}
]

// level 1
do {


  var try1 = 0;
var score = 0;

console.log (chalk.bgBlueBright("\n\n          ==============================================          \n          --------- Welcome to the Level 1 -------------          \n          ==============================================          \n\n"))

// creating a array of level 1 question

var level1questions = [
  {q: chalk.blue("Ques-1 ")+"What is my name? \na. Kunal \nb. Hitesh \nc. shubham \nd. Gaurav \n"+chalk.magenta("\nYour answer is: "), a: "a"} ,
  {q: chalk.blue("Ques-2 ")+ " When is my Birthday? \na. 28-january-1997 \nb. 28-august-1997 \nc. 28-august-1996 \nd. 15-august-1997"+chalk.magenta("\nYour answer is: "), a: "b" } ,
  {q: chalk.blue("Ques-3 ")+" Who is my Best Friend? \na. Shubham \nb. Diya \nc. Hitesh \nd. Kunal"+chalk.magenta("\nYour answer is: "), a:"d"} ,
  {q:chalk.blue("Ques-4 ")+" From where I have Done my MBA? \na. USMS,IPU \nb. Delhi University \nc. Aryabhatta,DU \nd. IIM Ahemdabad"+chalk.magenta("\nYour answer is: "), a:"a"}
]

//  calling the function and creating the loop

for ( var l1 = 0 ; l1 < level1questions.length ; l1++){
  var level1ques = level1questions[l1]
  play(level1ques.q , level1ques.a)
}

console.log ("Your score fore level 1: " + score )

if ( score >= "4"){
  console.log ("Congrats!! let's Play the level 2 \n\n")

  
  // level 2
do {
  var p = 0;
var score = 4;

console.log (chalk.bgYellow.bold("\n\n          ==============================================          \n          --------- Welcome to the Level 2 -------------          \n          ==============================================          \n\n"))

//  Creating an Array of Objects

var level2questions = [
  {q: chalk.blue("Ques-1 ")+" What is my favourite esports game? \na. Chess \nb. Pubg \nc. BGMI \nd. Fortnite "+chalk.magenta("\nYour answer is: ") , a: "a"} ,
  {q: chalk.blue("Ques-2 ")+" What is my Fav Series? \na. game of thrones \nb. Breaking Bad \nc. SUITS \nd. Bandish Bandits "+chalk.magenta("\nYour answer is: "), a:"c"} ,
  {q: chalk.blue("Ques-3 ")+" My favourite color \na. Red \nb. Yellow \nc. Blue \nd. Pink"+chalk.magenta("\nYour answer is: "),a:"c"} ,
  {q: chalk.blue("Ques-4 ")+" My Fav Movies: \na. Forrest Gump \nb. Inception \nc. Avengers Series \nd. All of the Above "+chalk.magenta("\nYour answer is: "), a:"d"}
]

// calling the Function and creating a loop

for ( var l2 = 0 ; l2 < level2questions.length ; l2++ ){
  var level2ques = level2questions[l2];
  play(level2ques.q , level2ques.a )
}

console.log ("Your score for level 2 is : " + score )

if ( score >= "8"){

  score = 8;

  console.log ("\nCongrats!! Let's play the level 3 \n\n")

  console.log (chalk.bgGreen("\n\n          ==============================================          \n          --------- Welcome to the Level 3 -------------          \n          ==============================================          \n\n"))


//  Array of Level 3 questions

  var level3questions = [
    {q: chalk.blue("Ques-1 ")+" My Fav Ice Cream nowadays: \na. Mango Bite \nb. Mango Duet \nc. Chocobar \nd. Khulfi "+chalk.magenta("\nYour answer is: "), a: "b"},
    {q: chalk.blue("Ques-2 ")+" What New Skill I am trying to Learn? \na. Coding \nb. Digital Marketing \nc. Editing \nd. All of the Above "+chalk.magenta("\nYour answer is: "), a:"a"},
    {q: chalk.blue("Ques-3 ")+" What is my fiancé Name: \na. Kritika  \nb. Riya \nc. Ritika \nd. Sheetal "+chalk.magenta("\nYour answer is: "), a: "d" },
    {q: chalk.blue("Ques-4 ")+" My first Startup Venture: \na. Onlinestreetshop.com \nb. Truly Logical \nc. Kunal Talks \nd. None of the above "+chalk.magenta("\nYour answer is: "), a: "a"}
  ]

// Calling the Function

for ( var h = 0 ; h < level3questions.length ; h++){
  var currentlevel3ques = level3questions[h];
  play( currentlevel3ques.q , currentlevel3ques.a )
}


// Final Score 

console.log(chalk.yellow("Your Final Score is: ") + score )

console.log (chalk.cyan("\n\n     High scores \n"))

for ( var h = 0 ; h < highScore.length ; h++ ){
  var currenthigh = highScore[h];
  console.log (chalk.magenta("Name: ") + currenthigh.name)
  console.log(chalk.cyan("Score: ") + currenthigh.score)
  console.log("---------------------")
}

if ( score > highScore[0].score ){
  console.log (chalk.yellowBright("\n\nCongratulation!!! you have earned the Highest Score \nPlz share screenshot on my Email id: knlarya7@gamil.com \nSo that, I can update my Highscore List"))
}
do{
  var g = 0;
var playAgain = readlineSync.question("Do you want to play again? (y/n) ")
if( playAgain === "y"){ try1 === 0;
g = " " ; p = " " ; 
} else if ( playAgain === "n")
{console.log(chalk.cyan("\nThank You playing the game\nHope you like our little game Quiz ;)"));
try1 = " ";
g = " ";
p = " "} else  {console.log(chalk.red("\nError!!! Plz write Only \ny = Yes \nn = No\n"));try1 = " ";
p = " "}
} while ( g === 0)


} else {
  console.log ("Sorry " + name + " Unfortunately! You have not able to passed the Level 2")
  do{
    var j = 0;
    var tryagain2 = readlineSync.question("Do you want to try again? (y/n) ")
    if ( tryagain2 === "y"){ 
     j = " " 
    } else if( tryagain2 === "n" ){
      console.log (chalk.yellow("\nThank you Playing the Game \nHope You Like our Little game Quiz "))  ; j = " " ; try1 = " " ; c = " " ; p = " "
      } else
      {
      console.log (chalk.red("\nError!!! Plz write Only \ny = Yes \nn = No\n"))} ; l2 = " "
    } while ( j === 0 )
  }
} while ( p === 0 )
}







 else {
  console.log ("Sorry " + name + " Unfortunately You have not able to passed the level 1")
  do{
    var c = 0;
  var tryagain = readlineSync.question("Do you want to try again? (y/n) ")
  
  if ( tryagain === "y"){ c = " "
  } else if ( tryagain === "n" ){
    console.log(chalk.yellow("\nThank You playing the game\nHope you like our little game Quiz "))
    ;try1 = " " , c = " "
  } else {console.log(chalk.red("\nError!!! Plz write Only \ny = Yes \nn = No\n"))}
  } while ( c === 0)
}
} while ( try1 === 0 )