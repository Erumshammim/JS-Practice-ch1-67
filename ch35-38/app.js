// /---------q1-----------/
var d = new Date();
document.write(d);
// /----------q2---------/
function greet(firstName,secondName)
{
    alert("Greetings "+firstName+" "+secondName);
}
    
greet("erum","shammim");
// /------------q3-----------/
var num1=+prompt("Enter first number");
var num2=+prompt("Enter second number");
function sum(num1,num2){
    return num1+num2;
}
var sum=sum(num1,num2);
alert("The sum of two numbers is "+sum);
// /------------q4------------/
function calculator(num1,num2,opr)
{
    if(opr=='+')
        return num1+num2;
    else if(opr=='-')
        return num1-num2;
    else if(opr=='*')
        return opr1*opr2;
    else if(opr=='/')
        return opr1/opr2;
    else if(opr=='%')
        return opr1%opr2;
}
alert("The answer is "+calculator(2,3,'+'));
// /------------q5------------/
function sqr(num){
    return num*num;
}
alert("The square of the number is"+sqr(5));
// /------------q6------------/
function fact(num)
{
    var fact=1;
    for(i=num;i>0;i--)
        fact*=i;
    alert("The factorial of a number is "+fact);
}
fact(3);
// /------------q7------------/
function counting(start,end)
{
    for(i=start;i<=end;i++)
        document.write(i+"<br>");
}
counting(1,10);
// /------------q8------------/
var base=+prompt("Enter base of a triangle");
var perp=+prompt("Enter perpendicular of a triangle");
function calcHyp(base,perp)
{
    function sqr(x)
    {
        return x*x;
    }
    var hyp=Math.sqrt(sqr(base)+sqr(perp));
    alert("The hypotenuse of a triangle is "+hyp);
}
calcHyp(base,perp);
// /------------q9------------/
var width=+prompt("Enter width of a rectangle");
var height=+prompt("Enter height of a rectangle");
function calcArea(width,height)
{
    document.write("The area of rectangle is "+width*height);
}
calcArea(5,2);
calcArea(width,height);
// /------------q10------------/
function check(text)
{
    if(text===text.split("").reverse().join(""))
        alert("The text is a palindrome");
    else
         alert("The text is not a palindrome");
}
check("madam");
// /------------q11------------/
function convert(text)
{
    var splitStr = text.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++)
   {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   alert(splitStr.join(' ')); 
}
convert("i m a good girl");
// /------------q12------------/
function long(text)
{
    var str = text.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++)
    {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
   document.write("STRING: "+text+"<br>OUTPUT: "+word);
}
long("Web Development tutorial");
// /------------q13------------/
function count(str,letter)
{
    var count=0;
    for(i=0;i<str.length;i++)
        {
           if(str[i]==letter)
               count++;
        }
    alert("The letter comes in the string "+count+" times");
}
count("shammim",'m');
// /------------q14------------/
function calcCircumference(rad)
{
    alert("The circumference of circle is "+2*(22/7)*rad);
}
function calcArea(rad)
{
    alert("The area of circle is "+(22/7)*Math.pow(rad,2));
}
var rad=+prompt("enter the radius of circle");
calcCircumference(rad);
calcArea(rad);