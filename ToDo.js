let toDoForm = document.querySelector("#todo-form");
let doneContainer = document.querySelector(".tabulka-Done");
let doneHeader = document.querySelector(".Done h1");

function updateTaskCount() {
    let taskCount = doneContainer.querySelectorAll("p").length;
    doneHeader.textContent = `Done: ${taskCount}`;
}

function createTask(text) {
    let p = document.createElement("p");
    p.innerHTML = `✓ ${text} `;

    let btn = document.createElement("button");
    btn.textContent = "Smazat";
    btn.classList.add("delete-button");

    btn.addEventListener("click", function () {
        p.remove();
        updateTaskCount();
    });

    p.appendChild(btn);
    doneContainer.appendChild(p);
}

toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputValue = e.target.elements.todo1.value.trim();

    if (inputValue !== "") {
        createTask(inputValue);
        updateTaskCount();
        e.target.reset(); 
    }
});
