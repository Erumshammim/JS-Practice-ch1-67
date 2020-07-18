var arr=[];
var arr1 = new Array();
var stuArr=["Duaa","Erum","Iqra"];
var numArr=[450,258,359];
var bolArr=[true,false,true];
var mixArr=["Danish",8,"duaa",1];
var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications<br>");
for(var i=0;i<qual.length;i++)
    {
      document.write(i+1+")"+qual[i]+"<br>");  
    }

for(i=0;i<stuArr.length;i++)
    {
        document.write("Score of "+stuArr[i]+" is "+numArr[i]+". Percentage:"+numArr[i]*0.5+"%<br>");
    }
var colArr=["red","green","blue"];
document.write(colArr);
var item1=prompt("Which color you want to add at the beginning?");
colArr.unshift(item1);
document.write("<br>"+colArr);
var item2=prompt("Which color you want to add at the end?");
colArr.push(item2);
document.write("<br>"+colArr);
colArr.unshift("black","brown");
document.write("<br>"+colArr);
colArr.shift();
document.write("<br>"+colArr);
colArr.pop();
document.write("<br>"+colArr);
var index=+prompt("At which index you want to add the color?");
var item3=prompt("Which color you want to add?");
colArr.splice(index,0,item3);
document.write("<br>"+colArr);
var index1=+prompt("At which index you want to delete the color?");
var tnum=+prompt("how many colors you want to delete?");
colArr.splice(index1,tnum);
document.write("<br>"+colArr);

var score=[320,230,480,120];
document.write("Score of Students: "+score+"<br>Ordered Score of Students: "+score.sort());


var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>Cities list: <br>"+city+"<br>Slected cities list:<br>"+city.slice(2,4));

var arr=["This","is","my","cat"];
document.write("<br>Array:<br>"+arr+"<br>String:<br>"+arr.join(" "));

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>"+devices);
for(var i=0;i<devices.length;i++)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }
var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>"+devices);
for(var i=devices.length-1;i>=0;i++)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
