document.getElementById('add').onclick = function(){
    if(document.getElementById('inputText').value==""){
        alert("Please Enter a Task")
    }
    else{
        document.getElementById('tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.getElementById('inputText').value}
                </span>
                <button class="delete">delete</button>
            </div>`;

        var tasks = document.getElementsByClassName("delete");
        for(var i=0; i< tasks.length; i++){
            tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}