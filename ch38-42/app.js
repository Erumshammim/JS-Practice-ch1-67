//Chapter#38-42

// Question#1
function calPower(base,exponent)
{
    var res=1;
   for(var i=1;i<=exponent;i++){
            res= res*base;
   }
   return res;
}
var base=+prompt("Q1: Enter the number:");
var exponent=+prompt("Q1: Enter the power of  number:");
var res=calPower(base,exponent);
alert(`A1: Result is ${res}`);

//Question#2
function leapyear(year)
{
if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0))
{
    alert(`A2: ${year} is a leap year`);

}
else
{
    alert(`A2: ${year} is not a leap year`);
}
}
var year =+prompt("Q1: Enter year:");
leapyear(year);

//Question#3
var side1=+prompt("Q3: Enter side1 of a triangle");
var side2=+prompt("Q3: Enter side2 of a triangle");
var side3=+prompt("Q3: Enter side3 of a triangle");

function calcHyp(S,side1,side2,side3)
{
    var temp=(S-side1)*(S-side2)*(S-side3);
    var area=S*temp;
    alert("A3: The area of a triangle is "+area);
}
function perimeter(side1,side2,side3)
    {
       return  (side1+side2+side3)/2;  
    }
var s=perimeter(side1,side2,side3);
calcHyp(s,side1,side2,side3);


//Question#4

function average(sub1,sub2,sub3){
    var avg= (sub1+sub2+sub3)/3;
    console.log(avg);
    return avg;
}
function percentage(sub1,sub2,sub3){
 var  per=((sub1+sub2+sub3)/300)*100;
  return per;
}
function result(){
    var marks = [];
    var size =3;
    for(var i=0; i<size; i++) {
	
        marks[i]=+prompt(`Q4: Enter the marks of subject ${i+1}`);
    }
    var sub1=marks[0];
    var sub2=marks[1];
    var sub3=marks[2];
    alert("A4: Average is "+average(sub1,sub2,sub3));
    alert("A4: Percentage is "+percentage(sub1,sub2,sub3)+ "%");
}
result();



//Question#5
function indOf(str1,ind)
{
    for(var i=0;i<str1.length;i++)
    {
        if(i == str1.indexOf(ind))
        {
            alert("A6: The index of "+ind+" is: "+i);
        }
    }
}
var str1 = prompt("Q5: Enter anything to know its index: ");
var ind = prompt("Q5: Enter the character to know its index: ");
indOf(str1,ind);

//Question#6
function del_vow(str1) {
    for (var i = 0; i <= str1.length; i++) {
        if (str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u' || str1.charAt(i) == 'A' || str1.charAt(i) == 'E' || str1.charAt(i) == 'I' || str1.charAt(i) == 'O' || str1.charAt(i) == 'U') {
            str1 = str1.replace(str1.charAt(i), '');
        }
    }
    alert("A6: Modified string is: "+str1);
}
var str1 = prompt("Q6: Enter a string: ");
del_vow(str1);


//Question#7
function findOccurrences() {
    var str = prompt("Q7: Enter any string:");
    var chars = str.toLowerCase().split("");
    var count = 0;
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }

    return count;
  }
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }

  var found = findOccurrences();

  alert("A: Count is: "+found);




//Question#8
var distance = prompt("Q8: Enter distance between two cities in km: ");
meters(distance);
feet(distance);
inches(distance);
centimeters(distance);
function meters(distance)
{
    distance = distance * 1000;
    alert("A8: The distance in meters is: "+distance);
}
function feet(distance)
{
    distance = distance * 3281;
    alert("A8: The distance in feet is: "+distance);
}
function inches(distance)
{
    distance = distance * 39370;
    alert("A8: The distance in inches is: "+distance);
}
function centimeters(distance)
{
    distance = distance * 100000;
    alert("A8: The distance in centimeters is: "+distance);
}


//Question#9
function overtime(hours)
{
    if(hours > 40)
    {
        var pay = 12*(hours-40);
        alert("A9: Your overtime pay is: "+pay);
    }
}
var hours = prompt("Q8: Enter no of hours that you have worked: ");
overtime(hours);

// Question#10
function denominations(amount)
{
    var hundered = amount/100;
    hundered = Math.floor(hundered);
    amount = amount%100;
    var fifty = amount/50;
    fifty = Math.floor(fifty);
    amount = amount%50;
    var ten = amount/10;
    ten = Math.floor(ten);
    alert("A10: You will have "+hundered+" hundered "+fifty+" fifty and "+ten+" ten notes");
}
var amount = prompt("Q10: Enter amount to withdraw: ");
denominations(amount);
