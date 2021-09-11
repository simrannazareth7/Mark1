//console.log("simran");
var readlineSync = require('readline-sync');
var score=0
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
 
 var myage=readlineSync.question('Do i live in Banglore? ');
 if(myage==="yes")
 {
   console.log("Wrong");
   score=-1
   console.log(score);
 }
 else
 {
   console.log("Right");
   score+=1;
   console.log(score);
 }

var ktmatt=readlineSync.question('Do i have a KT? ');
if(ktmatt==="yes")
{
   console.log("Wrong");
   score=-1
   console.log(score);
}
else
 {
   console.log("Right");
   score+=1;
   console.log(score);
 }

 var ktmatt=readlineSync.question('I am older than 18 ');
if(ktmatt==="yes")
{
   console.log("Wrong");
   score=-1
   console.log(score);
}
else
 {
   console.log("Right");
   score+=1;
   console.log(score);
 }

 var ktmatt=readlineSync.question('Do i like playing cricket? ');
if(ktmatt==="yes")
{
   console.log("Wrong");
   score=-1
   console.log(score);
}
else
 {
   console.log("Right");
   score+=1;
   console.log(score);
 }

 var ktmatt=readlineSync.question('Do I like MSD? ');
if(ktmatt==="yes")
{
   console.log("Wrong");
   score=-1
   console.log(score);
}
else
 {
   console.log("Right");
   score+=1;
   console.log(score);
 }

 