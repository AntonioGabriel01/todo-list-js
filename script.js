const button = document.getElementById("AddTask");
const input = document.getElementById("TextTask");
const Task = document.getElementById("Task");

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    return;
  }
    const value = input.value;
    const Li = document.createElement("li");
    Li.textContent = value;


    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X";
deleteButton.addEventListener("click", function(){
    Li.remove()
})
    Li.appendChild(deleteButton)
    Task.appendChild(Li);
  input.value = "";
});
