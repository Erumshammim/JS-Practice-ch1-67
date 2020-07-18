//Chapter# 43-48

//Question#1
function click1(){
    alert("This is click function");
    
}

//Question#2

function mobile(){
    alert("Thanks for purchasing a phone from us!!");
    
}

//Question#3
function deleteRow(row) {
    document.getElementById('std').deleteRow(row);
}


//Question#4
function mouseOut(){
    var a = document.getElementById("mouse");
    a.src = 'pic3.jpg';
}
function mouseOver(){
    var b = document.getElementById("mouse");
    b.src = 'pic4.jpg';
}

//Question#5
var count = 0;
var c = document.getElementById("counter");
function increase(){
count ++;
c.innerHTML = count;
}
function decrease(){
    count --;
    c.innerHTML = count;
    }

   