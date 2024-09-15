
var inputtask=document.getElementById("taskInput");
var list=document.getElementById("list");
var newtask=null;

function addtask(){
    if(inputtask.value==""){
        alert("Enter the task");
    }
else if(newtask){
    newtask.firstChild.textContent=inputtask.value;
    console.log("new");
    newtask=null;
clear();

}else{
    let task=document.createElement('li');
    task.innerHTML=inputtask.value;
    list.appendChild(task);
    let removebtn=document.createElement('button');
    removebtn.innerHTML="delete";
    task.appendChild(removebtn);
    var update=document.createElement('button');
    update.style.backgroundColor="skyblue";
    removebtn.style.backgroundColor="skyblue";

    update.style.padding="10px";
    update.style.margin="10px";
    removebtn.style.padding="10px";
    removebtn.style.margin="10px";
    removebtn.style.borderRadius="10%";
    update.style.borderRadius="10%";



    update.innerHTML="upadate";
    task.appendChild(update);
    update.onclick=function(){
      updatetask(task);
    }
  removebtn.onclick=function(){
    remove(task);
  }
    console.log(task);
    clear();

}

}


function clear(){
    inputtask.value="";
}

function remove(task){
task.remove();
}

function updatetask(task) {
    inputtask.value=task.firstChild.textContent;
    newtask=task;
    console.log("update");
}