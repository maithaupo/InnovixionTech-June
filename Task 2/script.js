document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const tasks = document.getElementById("tasks");

    // Function to add a new task
    window.addTask = function() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const taskTextInput = document.createElement("input");
        taskTextInput.type = "text";
        taskTextInput.value = taskText;
        taskTextInput.setAttribute("readonly", "readonly");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.onclick = () => {
            if (editButton.textContent === "Edit") {
                taskTextInput.removeAttribute("readonly");
                taskTextInput.focus();
                editButton.textContent = "Save";
            } else {
                taskTextInput.setAttribute("readonly", "readonly");
                editButton.textContent = "Edit";
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = () => tasks.removeChild(li);

        li.appendChild(taskTextInput);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        tasks.appendChild(li);

        taskInput.value = "";
    };
});
