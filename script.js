function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim(); 

    if (task !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = '<span>' + task + '</span><button class="delete-btn" onclick="deleteTask(this)">DELETE</button>';
        ul.appendChild(li);
        input.value = ""; 
    }
}

function deleteTask(btn) {
    var li = btn.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}