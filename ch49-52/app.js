
    //Chapter# 49-52
//Question#1
function submit(){
    var u = document.getElementById("uname");
    var p = document.createElement("p")
    var text= document.createTextNode(u.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)

    var em = document.getElementById("email");
    var p = document.createElement("p")
    var text= document.createTextNode(em.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)

    var ps = document.getElementById("pswrd");
    var p = document.createElement("p")
    var text= document.createTextNode(ps.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)

    var ph = document.getElementById("phone");
    var p = document.createElement("p")
    var text= document.createTextNode(ph.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)
    u.value = " Username";
    em.value = " E-mail";
    ps.value = " Password ";
    ph.value = " Phone# ";
}

//Question#2
function read(){
    var r = 'iPhone 11 Pro smartphone was launched on 10th September 2019. The phone comes with a 5.80-inch touchscreen display with a resolution of 1125x2436 pixels at a pixel density of 458 pixels per inch (ppi). iPhone 11 Pro ispowered by a hexa-core Apple A13 Bionic processor. It comes with 4GB of RAM';

document.getElementById("read").innerHTML = r;
}

//Question#3
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}

