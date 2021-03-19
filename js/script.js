let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);

function TodoPost(e) {
    e.preventDefault();

    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${todo} <br>`;

}

function TodoClear() {
    var todos = document.getElementsByName("todo");
    
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }

}

function TodoDel() {
    var list = document.getElementById("todoList");
    list.innerHTML = "";
}

function TodoMark() {
    var todos = document.getElementsByName("todo");
    
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
}