var table=document.getElementById("table");
var nameinput=document.getElementById("nameinput");
var priceinput=document.getElementById("priceinput");


function addrow(){
    if(nameinput.value==""||priceinput.value==""){
        alert("enter name and price");
        return;
    }

    var tr=document.createElement('tr');
    var tdname=document.createElement('td');
    tdname.innerText=nameinput.value;
    tr.appendChild(tdname);
    var tdprice=document.createElement('td');
    tdprice.innerText=priceinput.value;
    var tdbtn=document.createElement('td');
    var btn=document.createElement('button');
    btn.innerText="delete";
    btn.style.backgroundColor="gainsboro";
    btn.style.padding="10px";
    tdbtn.appendChild(btn);

    tr.appendChild(tdname);
    tr.appendChild(tdprice);
    tr.appendChild(tdbtn);

    table.appendChild(tr);

    btn.onclick=function(){
        deleterow(tr);
    }
clear();

}


function clear(){
    nameinput.value="";
    priceinput.value="";
}

function deleterow(tr){
    tr.remove();
}