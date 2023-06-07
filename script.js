"use strict";


function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Bos buraxila bilmez");
        return;
    }

    var newTask = document.createElement("li");
    newTask.appendChild(document.createTextNode(taskInput.value));

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
        taskList.removeChild(newTask);
    };

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
}

