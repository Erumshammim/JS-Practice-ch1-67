//Chapter#21-25
//Question#1
var firstName=prompt("Enter your firstname");
var lastName=prompt("Enter your lastname");
var fullname;
fullName=firstName+lastName;
alert("Greetings" + " " + fullName );

//Question#2
var mobileModel = prompt("Enter your favorite mobile model");
document.write("My favorite phone is: " + " " + mobileModel + "<br>");
var count=mobileModel.length;
document.write("Length Of String: "+ " " + count + "<br>");

//Question#3
var letter = "Pakistani";
document.write("String: "+ " " + letter + "<br>" );
document.write("Index of Letter 'n' is:" + " "+ letter.indexOf("n") + "<br>");

//Question#4
var letter = "Hello World";
document.write("String: "+ " " + letter + "<br>" );
document.write("Last Index of Letter 'L' is:" + " "+ letter.lastIndexOf("l") + "<br>");


//Question#5
var letter = "Pakistani";
var thirdIndex=letter.charAt(3);
document.write("String: "+ " " + letter + "<br>" );
document.write("3rd Index of Character is:" + " "+ thirdIndex+ "<br>");


//Question#6
var firstName=prompt("Enter your firstname");
var lastName=prompt("Enter your lastname");
var fullName=firstName.concat(lastName);
document.write("Full Name is: "+ " "+ fullName);


//Question#7
var str1="Hyderabad";
document.write("City:" + " " + str1 + "<br>");
var str2=str1.replace("Hyderabad","Islamabad" );
document.write("After replacement:" + " " + str2+ "<br>");


//Question#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message2= message.replace(/and/g, "&")
document.write("After replacement : " + " " + message2+ "<br>");


//Question#9
var value=472;
var str=value.toString()
document.write("Value: " + " "+str +"<br>");
document.write("Type: "+ " " + typeof str +"<br>");
document.write("Value: " + " "+value +"<br>");
document.write("Type: "+ " " + typeof value +"<br>");


//Question#10
var a=prompt("Enter your input");
var b=a.toUpperCase();
document.write("User input: " +" " + a + "<br>");
document.write("Upper Case: " +" " + b + "<br>");


//Question#11
var a=prompt("Enter your input");
var b=a.charAt(0).toUpperCase() + a.slice(1);
document.write("User input: " +" " + a + "<br>");
document.write("Title Case: " +" " + b + "<br>");


//Question#12
var a=35.36;
var b= a*100;
var c=b.toString();
document.write("Number :" + " " + a+ "<br>");
document.write("Result :" + " " + c+ "<br>");

//Question#13
var userName= prompt("Enter Your Username");
for(var a=0; a<=userName.length; a++){
if(userName.charAt(a) === '!' || userName.charAt(a)  === '@' || userName.charAt(a)  === '.' || userName.charAt(a)  === ',' ) {
    alert("Please Enter a Valid Username")
}
}

//Question#14
var bakeryItems =["cake", "apple pie", "cookie", "chips", "patties"];
var search =prompt("Welcome to 'ABC' Bakery. <br> What do youwant to order sir/ma'am?");
var a=search.toLowerCase();
for(var i=0; i<bakeryItems.length; i++)
if (bakeryItems[i] === a){
    document.write(bakeryItems[i] + "  "+ "is available at index" + " " + i + " " + "in our bakery <br>");
break;
} 
else if(bakeryItems[i]!== a){
    document.write("We are sorry" + " " + a +" "+ "is not available in our bakery <br>");
    break;
}

//Question#15
var x = 0;
var password = prompt("Enter your password");
document.write("Entered Password is: "+password+"<br>");
    

if( password.charAt(0) >= '0' && password.charAt(0) <='9')
      { document.write("Password can not begin with a number<br>"); }
if(password.length <6 )
      { document.write("Password must be atleast 6 characters long<br>"); }
else{ 
    for(var i=0; i<password.length; i++){
    {
if( password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
   { x++; }
 if(password.charAt(i) >= 'a' && password.charAt(i) <= 'z') 
   { x++;}
if (password.charAt(i) >= '0' && password.charAt(i) <= '9')
  {x++;}
     }
  }
  if(x == password.length)
  document.write("Your password satisfies all the validations!<br>");
}



//Question#16
var uni = "University of karachi";
var b = uni.split("");
for(var a=0; a< b.length; a++){
document.write(b[a] +" <br>");
}

//Question#17
var input = prompt("Enter your input");
var b = input.charAt(input.length-1)
document.write("User input: " + "" + input + "<br>");
document.write("Last character of input is : " + " " + b + "<br>");


//Question#18
var str =  "The quick brown foxjumps over the lazy dog";
var str2=str.toLowerCase();
var s= str2.split(" ")
var word = "the";
var count=0;
document.write("Text: " + " "+str +"<br>");
for(var a = 0 ; a<s.length; a++){
if(s[a] === word){
count++;
}
}
document.write("There are " + " " + count + " " + "occurrence(s) of word 'the'  +<br>");


