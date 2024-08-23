let navToogle = document.querySelector("#menu-icon");
let flag_1 = 0;

navToogle.addEventListener('click', function showNav(e) {
    if (flag_1 === 0) {
        document.querySelector(".nav-list").style.display = "flex";
        document.querySelector(".navbar").style.height = "300px";
        flag_1 = 1;
    } else {
        document.querySelector(".nav-list").style.display = "none";
        document.querySelector(".navbar").style.height = "40px";
        flag_1 = 0;
    }
})

let dataBase = [];


class TodoOperations {
    constructor(todo) {
        this.todo = todo;
    }
}

let input = document.querySelector("#todo-input");

input.value;

if (input.value !== "") {
    console.log(input.value);
}