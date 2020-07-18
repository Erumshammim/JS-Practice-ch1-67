document.write("Ch:5 <br> <br>");

document.write("Q:1 <br><br>");

var a= +prompt("Enter 1st number" );
var b= +prompt("Enter 2nd number" );
var c=a+b;
document.write("sum of " + a + " " + "and"+ " " + b + " "+ "is" + " "+ c +"<br><br>" );

document.write("Q:2 <br><br>");
var val1= +prompt("Enter 1st number" );
var val2= +prompt("Enter 2nd number" );
var sub=val1-val2;
var mul=val1*val2;
var div=val1/val2;
var mod=val1%val2;
document.write("Subtraction of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ sub +"<br><br>" );
document.write("Multiplication of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ mul +"<br><br>" );
document.write("Division of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ div +"<br><br>" );
document.write("Modulus of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ mod +"<br><br>" );


document.write("Q:3 <br><br>");
var v;
document.write("Value after variable declaration is: " + v + "<br>") ;
v=14;
document.write("Intial Value :" + v + "<br>");
document.write("Value after increment is :" + (++v) + "<br>");
v=v+7;
document.write("Value after addition is :" + v + "<br>");
document.write("Value after decrement is :" + (-- v) + "<br>");
document.write("The remainder is :" + v/3 + "<br><br>");

document.write("Q:4 <br><br>");
var people=+prompt("Enter total number of people");
var tp=600*people;
document.write("Total cost to buy" + " " + people + " "+ "tickets to a movie is "+ ""+ tp+"PKR <br> <br>" );


document.write("Q:5 <br><br>");
var num=+prompt("Enter any number for multiplication");
var length=+prompt("Enter length of table");
document.write("Table of" + " " + num  + " <br>" );
for(var i=1; i<=length;i++)
{
    var table=num*i;
    document.write(num + "*"+ i + "="+ table + "<br><br>");
}

document.write("Q:6 <br><br>");
document.write("The Temperature Converter <br> <br>");
var celsius=+prompt("Enter temperature in celsius");
var fahrenheit=+prompt("Enter temperature in fahrenheit");
document.write(celsius+"oC" +" " + "is" +" "+((celsius*(9/5))+32)+"oF <br>");
document.write(fahrenheit+"oF" +" "+ "is"+" "+ ((fahrenheit-32)*(5/9)) +"oC <br> <br>");


document.write("Q:7 <br><br>");
document.write("Shopping Cart <br><br>");
var item1=650;
var item2=100;
var quantity_item1=+prompt("Enter Quantity of item1");
var quantity_item2=+prompt("Enter Quantity of item2");
var ship_charges=100;
document.write("Price of item 1 is:" +" " + item1 +"<br>");
document.write("Quantity of item 1 is: "+ " " +  quantity_item1 +"<br>");
document.write("Price of item 2 is:" + " " + item2 +"<br>");
document.write("Quantity of item 2  is: " +" " + quantity_item2 +"<br>");
document.write("Shippment Charges :" + " " + ship_charges+"<br>");
document.write("Total cost of your order is:" +  " " + ((item1*quantity_item1)+(item2*quantity_item2)) +"<br><br>");

document.write("Q:8 <br><br>");
document.write("Mark Sheet <br><br>");
var total_marks= +prompt("Enter total marks");
var obtained_marks=+prompt("Enter obtained marks");
var percentage=(obtained_marks/total_marks)*100;
document.write("Total marks: " + " " + total_marks+ "<br>");
document.write("Obtained marks: " + " " + obtained_marks+ "<br>");
document.write("Percentage: " + " " + percentage+ "%  <br><br>");

document.write("Q:9 <br><br>");
document.write("Currency in PKR <br><br>");
var dollar_1 = 104.80;
var saudiRiyal_1=28;
document.write("Total Currency in PKR:"+" " + ((10*dollar_1)+(25*saudiRiyal_1)) +"<br><br>");

document.write("Q:10 <br><br>");
var number=3;
document.write("Result:"+" "+ ((number+5)*10)/2 + "<br> <br>");

document.write("Q:11 <br><br>");
document.write("Age Calculator <br><br>");
var current_year=2020;
var birth_year=+prompt("Enter your Birth Year");
document.write("Current Year: "+" "+ current_year+ "<br>");
document.write("Birth Year: "+" "+ birth_year + "<br>");
document.write("Your Age is: "+" "+ (current_year-birth_year) +"<br><br>");


document.write("Q:12 <br><br>");
document.write("The Geometrize <br><br>");
var r=+prompt("Enter Radius");
var pi=3.142;
document.write("The Radius of Circle is: " +" "+ r +"<br>");
document.write("The Circumference is:"+ " " + 2*pi*r+ "<br>");
document.write("Area of circle is: "+" "+ pi*r*r + "<br> <br>");



document.write("Q:13 <br><br>");
document.write("The Lifetime Supply Calculator<br><br>");
var fav_snack=prompt("Enter your Favourite Snack");
var current_age=+prompt("Enter your current age");
var max_age=+prompt("Enter your estimated maximum age");
var snack_perDay=+prompt("Enter estimated amount of snack per day");

document.write("Favourite Snack:"+" " + fav_snack + "<br>");
document.write("Current age:"+" " + current_age + "<br>");
document.write("Estimated Maximum Age:"+" " + max_age + "<br>");
document.write("Amount of snacks per day:"+" " + snack_perDay + "<br>");
document.write("You will need:"+" " +((max_age-current_age)*snack_perDay) +" "+ "chocolate chip to last you until the ripe old age of"+" "+ max_age+ "<br>" );
