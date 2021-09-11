//console.log("simran");
var readlineSync = require('readline-sync');
var score=0
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
 
 var a=readlineSync.question('Do i live in Banglore? ');
 if(a==="yes")
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

var b=readlineSync.question('Do i have a KT? ');
if(b==="yes")
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

 var c=readlineSync.question('I am older than 18 ');
if(c==="yes")
{
   console.log("Right");
   score=-1
   console.log(score);
}
else
 {
   console.log("Wrong");
   score+=1;
   console.log(score);
 }

 var d=readlineSync.question('Do i like playing cricket? ');
if(d==="yes")
{
   console.log("Right");
   score=-1
   console.log(score);
}
else
 {
   console.log("Wrong");
   score+=1;
   console.log(score);
 }

 var e=readlineSync.question('Do I like MSD? ');
if(e==="yes")
{
   console.log("Right");
   score=-1
   console.log(score);
}
else
 {
   console.log("Wrong");
   score+=1;
   console.log(score);
 }

 