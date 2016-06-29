//alert('Loaded ...')
function show(){
var todos = getTodos();
var html = '<ul>';
  for(var i=0; i<todos.length; i++){
    html += '<li>' + todos[i] + '<button class="remove" id="'+i+'" >x</button></li>' ;
  }
html+= '</ul>';
document.getElementById("todos").innerHTML = html;
var removeButtons = document.getElementsByClassName('remove');
  for(var i=0; i<removeButtons.length; i++){
    removeButtons[i].addEventListener('click', remove);
  }
}
function getTodos(){
  var todos = new Array();
  var todos_str = localStorage.getItem('todos');
  if(todos_str !== null) {
    console.log(todos_str)
    todos = JSON.parse(todos_str)
  }
return todos;
}

function addTask(){
  var task = document.getElementById("task").value;

  var todos = getTodos();
  todos.push(task);
    localStorage.setItem('todos',JSON.stringify(todos));
  show();
  return false;
}

function remove(){
  var id = this.getAttribute('id');
  var todos = getTodos();
  todos.splice(id, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  show();
  return false;
}

document.getElementById("add").addEventListener('click', addTask);
show();
