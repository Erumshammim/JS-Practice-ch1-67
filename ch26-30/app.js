
//Chapter#26-30

//Question#1
var a = +prompt("Enter a Positive number");
b=Math.round(a);
c=Math.floor(a);
d=Math.ceil(a);

if(a>=1)
{
    document.write("Number: "+ " " + a +"<br>");
    document.write("Round off value: "+ " " + b  +"<br>");
    document.write("Floor value: "+ " " + c +"<br>");
    document.write("Ceil value: "+ " " + d +"<br>");
}
else{
    alert("Please enter valid number");
}


//Question#2
var a = +prompt("Enter a Negative number");
b=Math.round(a);
c=Math.floor(a)
d=Math.ceil(a)

if(a<1)
{
    document.write("Number: "+ " " + a +"<br>");
    document.write("Round off value: "+ " " + b  +"<br>");
    document.write("Floor value: "+ " " + c +"<br>");
    document.write("Ceil value: "+ " " + d +"<br>");
}
else{
    alert("Please enter valid number");
}


//Question#3
var i = +prompt("Enter a  number");
var j = Math.abs(i);
document.write("Number: "+ " " + i +"<br>");
document.write("Absolute Number is: "+ " " + j +"<br>");


//Question#4
var diceRoll = Math.floor( Math.random() * 6 +1);
document.write('Random Dice Value:  ' +" " + diceRoll +"<br>");


//Question#5
var coin = Math.floor( Math.random() * 2 +1);
if(coin == 1)
{
document.write( coin + "<br>" );
document.write('Random coin value is:   Head <br>');
}
else{
    document.write( coin + "<br>" );
    document.write('Random coin value is:  Tail <br>');
}


//Question#6
 var RandNum = Math.floor( Math.random() * 100 +1);
 document.write("Random number between 1 and 100 : "+ " " + RandNum + "<br>");

//Question#7
var userWeight= +prompt("Enter your weight in kgs");
var randWeight =  Math.random() * userWeight;
var n=randWeight.toFixed(1);
document.write("The weight of user is : "+ " " + n+"<br>");



//Question#8
var a= +prompt ("Enter a number between 1 to 10");
var secretNum= Math.floor(Math.random() * 10 + 1); 
if (a== secretNum){
    alert("Congratulations!!");
}
else{
alert("Try Again");
}
