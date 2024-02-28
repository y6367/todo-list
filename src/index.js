import './main.scss';
import newTodo from "./newTodo";

const toDoBtn = document.querySelector(".btn")

toDoBtn.addEventListener("click", () => {
    newTodo()
})
