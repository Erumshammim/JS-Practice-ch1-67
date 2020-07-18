var a=+prompt("Enter a number");

document.write("Result:<br>The value of a is:"+a+"<br>...................<br>");
document.write("The value of ++a is:"+ ++a+"<br>Now the value of a is:"+a+"<br><br>");
document.write("The value of a++ is:"+a++ +"<br>Now the value of a is:"+a);
document.write("<br><br>The value of --a is:"+ --a+"<br>Now the value of a is:"+a);
document.write("<br><br>The value of a-- is:"+a-- +"<br>Now the value of a is:"+a);

var a = 2, b = 1;
var result = --a - --b + ++b + b--;//1-0+1+1
document.write("<br>a is 2<br>b is 1<br>result is "+result);

var user=prompt("Enter your name");
alert("Greetings "+user);

var num=+prompt("Enter a number");
for(var i=1;i<=10;i++)
    {
    if (num=="")
    document.write("<br>5*"+i+"="+5*i); 
    else    
    document.write("<br>"+num+"*"+i+"="+num*i);
        
    }

var sub1=prompt("Enter 1st subject name");
var sub2=prompt("Enter 2nd subject name");
var sub3=prompt("Enter 3rd subject name");
var marks1=+prompt("Enter marks of 1st subject");
var marks2=+prompt("Enter marks of 2nd subject");
var marks3=+prompt("Enter marks of 3rd subject");
var total=100;

