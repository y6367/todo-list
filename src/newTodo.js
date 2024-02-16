// import { create } from "domain"

function newTodo() {
    let container = document.querySelector('.container');
    let toDo = document.createElement('div');

    let labels = ['Title', 'Description', 'Due Date', 'Priority'];
    
    for (let i = 0; i < 4; i++) {
        let createDiv = document.createElement('div');
        let userInput = prompt(`Enter ${labels[i]}:`);
        createDiv.textContent = `${labels[i]}: ${userInput}`;
        toDo.appendChild(createDiv);
    }

    container.appendChild(toDo);
}


let btn = document.querySelector('.btn')

export default newTodo