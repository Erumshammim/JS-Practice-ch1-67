// /---------q1-----------/
var d = new Date();
document.write("</br></br></br>  Question#1 </br> ");
document.write(d);
// /----------q2---------///////////
mlist = [ "January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November", "December" ];
  
var currentMonth = d.getMonth();
alert("Current Month :"+ mlist[currentMonth] );
// /------------q3-----------/
dlist=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var day=d.getDay();
alert("Today is "+ dlist[day] );

// /------------q4------------/
var day=d.getDay();

    if(day==0 || day==6)
    {
        alert("It’s Fun day");
    }
    else
    {
        alert("It’s not a Fun day");
    }
    

// /------------q5------------/
var todayDate= d.getDate();

for(i=1;i<=15;i++)
{
    if(todayDate==i)
    {
        alert("First fifteen days of the month");
        break;
    }
}
    alert("Last days of the month");


// /------------q6------------/
var milisceconds= d.getTime();
var minutes=milisceconds/1000*60;
document.write("</br></br></br>  Question#6");
document.write(" </br> Current Date: " + d);
document.write(" </br> Elapsed milliseconds since January 1,1970: " + milisceconds);
document.write(" </br> Elapsed minutes since January 1,1970: " + minutes);

// /------------q7------------/
var d = new Date();
if((d.getHours() >= 12) )
{
  alert("It's PM");
}
else{
    alert("It's AM");
}

// /------------q8------------/
var de= new Date();
de.setFullYear(2020);
de.setMonth(11);
de.setDate(31);
de.setHours(00);
de.setMinutes(00);
de.setSeconds(00);
document.write("</br></br></br>  Question#8");
document.write("</br>  ",de);

// /------------q9------------/
var ra=new Date("April,25,2020");
var raMili=ra.getTime();
var a=new Date();
var aMili=a.getTime();
var diff=aMili-raMili;
var days=Math.ceil(diff/(1000*60*60*24));
document.write("</br></br></br>  Question#9");
document.write(" </br> first ramazan was on April 25,2020");
document.write(" </br> " + days +"  days has passed since the beginning of 2015");

// /------------q10------------/
var b=new Date("Dec,05,2015 22:50:16");
var bMili=b.getTime();
var a=new Date("Jan,01,2015 00:00:00");
var aMili=a.getTime();
var diff=bMili-aMili;
var seconds=Math.ceil(diff/(1000*60));
document.write("</br></br></br>  Question#10");
document.write(" </br> " + seconds +"  seconds has passed since the beginning of 2015");

// /------------q11------------/
var da= new Date();
document.write("</br></br></br>  Question#11");
document.write("</br> Current Date: ",da);
da.setMinutes(-1);
document.write("</br> 1 hour ago , it was ",da);


// /------------q12------------/
var da= new Date();
document.write("</br></br></br>  Question#12");
document.write("</br> Current Date: ",da);
da.setMonth(-1200);
document.write("</br> 100 years back , it was ",da);

// /------------q13------------/

var age=prompt(parseInt("Enter Your Age:"));
ageMonths=age*12;
var da= new Date();
da.setMonth(-ageMonths);
var year=da.getFullYear();
document.write("</br></br></br>  Question#13");
document.write(" </br> Your Age is " + age);
document.write(" </br> Your birth year is: " + year );

// /------------q14------------/
cName="Erum shammim";
mlist = [ "January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November", "December" ];
  
var currentMonth = d.getMonth();
document.write("</br></br></br>  Question#14");
document.write(" </br> Customer Name: " +cName);
document.write(" </br> Month:"+ mlist[currentMonth] );
var units=410;
var chargePerUnit=16
var lateCharges=350
document.write(" </br> Number Of Units: " +units);
document.write(" </br> Charges per unit: "+chargePerUnit );
netAmount=units*chargePerUnit;
grossAmount=netAmount+lateCharges;
document.write(" </br> Net Amount Payable (within Due Date) : "+netAmount );
document.write(" </br> Late payment surcharge: "+lateCharges );
document.write(" </br> Gross Amount Payable (after Due Date):"+grossAmount );


