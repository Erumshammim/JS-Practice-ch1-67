document.write("Chapter_9-11 <br> <br>");
document.write("Q:1 <br> <br>");
var city = prompt("Enter City");
if(city === "karachi")
{
    document.write("Welcome to city of lights <br> <br>");
}

document.write("Q:2 <br> <br>");
var gender= prompt("Enter your gender");
 if(gender === "male")
{
    document.write("Good Morning Sir <br><br>");
}
else{
    document.write("Good Morning Ma'am <br> <br> ")
}


document.write("Q:3 <br> <br>");
var signal_color=prompt("Enter traffic signal color");
var red="Must Stop";
var yellow="Ready to move";
var green="Move now";
if(signal_color=== "red"){
document.write(red +" <br><br>");
}
else if(signal_color=== "yellow"){
    document.write(yellow +"<br><br>");
}
else{
    document.write(green +" <br><br>");
}

document.write("Q:4 <br> <br>");
var fuel=+prompt("Enter remaining fuel of car in litres");
if(fuel < 0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("No need to refill the fuel <br> <br>");
}



document.write("Q:5 <br> <br>");
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 } 
 var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); 
    } 
 var c = 12; 
 if (c++ === 13){
      alert("condition 1 is true"); 
    } 
 
 if (c === 13){ 
     alert("condition 2 is true"); 
    }
  if (++c < 14){ 
      alert("condition 3 is true"); 
    }
       if(c === 14){
            alert("condition 4 is true");
         } 
 var materialCost = 20000; 
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
       alert("The cost equals"); 
} 
  if (true){ 
      alert("True");
     } 
  if (false){ 
      alert("False");
     } 
  if("car" < "cat"){ 
      alert("car is smaller than cat");
     } 
 
document.write("Q:6 <br> <br>");
var sub1=+prompt("Enter marks of 1st subject");
var sub2=+prompt("Enter marks of 2nd subject");
var sub3=+prompt("Enter marks of 3rd subject");
var total_marks=300;
var obtained_marks=sub1+sub2+sub3;
var percentage=(obtained_marks/total_marks)*100;
document.write("Total Marks: "+" "+ total_marks+"<br>");
document.write("Obtained Marks: "+" "+ obtained_marks+"<br>");
if(percentage >= 80){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : A1 <br>");
    document.write("Remarks : Excellent<br><br>");
}
else if(percentage >= 70){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : A <br>");
    document.write("Remarks : Good<br><br>");
}
else if(percentage >= 60){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : B <br>");
    document.write("Remarks : You need to improve<br><br>");
}
else{
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : Fail <br>");
    document.write("Remarks : Sorry<br><br>");
}


document.write("Q:7 <br> <br>");
document.write("Guess Game <br> <br>");
var secret_num=5;
var guess_num=+prompt("Guess the secret number (ranging from 1 to 10)");
if(guess_num === secret_num){
    document.write("Bingo! Correct");
}
else if(guess_num+1 === secret_num){
    document.write("Close enough to the correct answer");
}
else{
    document.write("Try Again");

}

document.write("Q:8 <br> <br>");
var num=+prompt("Enter number");
if(num%3 === 0){
document.write("Given number is divisible by 3 <br> <br>");
}
else{
    document.write("Try another number <br> <br>");

}


document.write("Q:9 <br> <br>");
var number=+prompt("Enter number");
if(number%2=== 0){
document.write("Given number is even <br> <br>");

}
else{
    document.write("Given number is odd <br> <br>");
}


document.write("Q:10 <br> <br>");
var temp=+prompt("Enter Temperature");
if(temp>40){
    document.write("It is too hot outside <br> <br>");
}
else if(temp>30){
    document.write("The Weather today is Normal <br> <br>");
}
else if(temp>20){
    document.write("Today’s Weather is cool <br> <br>");
}
else{
    document.write("OMG! Today’s weather is so Cool<br> <br>");
}


document.write("Q:11 <br><br>");
var val1= +prompt("Enter 1st number" );
 var val2= +prompt("Enter 2nd number" );
 var op= prompt("Enter Operator");
 var ans;
 if(op === "+"){
    ans=val1+val2;
   document.write("Addition of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
 else if(op === "-"){
     ans=val1-val2;
    document.write("Subtraction of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
 }
 else if(op === "*"){
    ans=val1*val2;
   document.write("Multiplication of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else if(op === "/"){
    ans=val1/val2;
   document.write("Division of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else if(op === "%"){
    ans=val1%val2;
   document.write("Modulas of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else{
    document.write("Invalid Operator");
}
document.write("<br><br>")


 


