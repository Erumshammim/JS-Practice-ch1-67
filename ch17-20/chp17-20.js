var arr=[];
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for(i=1;i<=10;i++)
    document.write(i+"<br>");

var num=+prompt("Enter a number to show its multiplication table");
var len=+prompt("Enter length multiplication table");
document.write("Multiplication table of "+num+"<br>Length "+len)
for(var i=1;i<=len;i++)
    document.write("<br>"+num+"*"+i+"="+num*i);

var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var i=0;i<fruits.length;i++)
    document.write("<br>"+fruits[i]);
for(var i=0;i<fruits.length;i++)
    document.write("<br>Element at index "+i+" is "+fruits[i] +"<br><br>");

document.write("Counting:<br><br>");
for(var i=1;i<15;i++)
    document.write(i+",");
document.write("<br>Reverse Counting:<br><br>");
for(var i=10;i>0;i--)
    document.write(i+",");
document.write("<br>Even:<br><br>");
for(var i=0;i<=20;i+=2)
    document.write(i+",");
document.write("<br>Odd:<br><br>");
for(var i=1;i<20;i++)
    document.write(i+",");
document.write("<br>Series:<br>");
for(var i=0;i<=20;i+=2)
    document.write(i+"k, <br><br>");

var a=["cake","apple pie","cookie","chips","patties"];
var item=prompt("Welcome to ABC Bakery! What do you want to order sir/madam?");
for(var i=0;i<a.length;i++)
    if(a[i]==item)
    {document.write(item+"is available at index "+i+" in our bakery <br><br>");
    break;}
else if(a[i]!=item)
   {document.write("We are sorry "+item+" is not available in our bakery<br><br>");
    break;
   }

var A = [24, 53, 78, 91, 12];
var max=0;
document.write("Array items:"+A);

for(var i=0;i<A.length;i++)
    {
        if(A[i]>max)
            max=A[i];
            
    }
document.write("<br>The largest number is "+max);

var A = [24, 53, 78, 91, 12];
var min=0;
document.write("<br>Array items:"+A);
min=A[0];
for(var i=0;i<A.length;i++)
    {
        if(A[i]<min)
            min=A[i];
            
    }
document.write("<br>The smallest number is "+min+"<br>");

for(var i=5;i<=100;i+=5)
document.write(i+",")


