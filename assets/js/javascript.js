function Tarea (title, completed ){
  this.title = title;
  this.completed = completed;
  this.terminado = function(){
    this.completed = true;
  }
  this.noTerminado = function(){
    this.completed = false;
  }
  this.toHTML = function(){
    var tarea = "";
    tarea += this.title;
    return tarea;
  }
}

function ListaCompleta () {
  this.tareas = [];
  this.agregar = function (tarea){
    if(tarea.title == ""){
      alert("Ops!! No hacer nada está bien, pero no ingresaste ninguna tarea");
    } else {
      this.tareas.push(tarea);
    }
  }
  this.mostrar = function(element){
    var stringHtml = "";
    element.innerHTML = stringHtml;
    for (var i in this.tareas){
      var task = this.tareas[i];
      if(task.completed){
        stringHtml += "<li style = background-color:#F2D7D5><input onclick = 'eliminar (this)' ondblclick='recuperar (this)'type=checkbox align=left id='" + i + "' ><del>" + task.toHTML() + "</del></li>";
      } else {
        stringHtml += "<li ><input type=checkbox align=left onclick = 'eliminar (this)' oncontextmenu='editar(this)' id='" + i + "'>" + task.toHTML() + "</li>";
      }
    }
    element.innerHTML = stringHtml;
  }
  this.terminado = function(){
    this.tareas.terminado();
  }
  this.noTerminado = function(){
    this.tareas.noTerminado();
  }
}

var listaTareas = new ListaCompleta();
listaTareas.agregar(new Tarea ("delectus aut autem", false));
listaTareas.agregar(new Tarea ("quis ut nam facilis et officia qui",false));
listaTareas.agregar(new Tarea ("fugiat veniam minus", false));
listaTareas.agregar(new Tarea ("et porro tempora", true));
listaTareas.agregar(new Tarea ("laboriosam mollitia et enim quasi adipisci quia provident illum", false));
listaTareas.agregar(new Tarea ("qui ullam ratione quibusdam voluptatem quia omnis", false));
listaTareas.agregar(new Tarea ("illo expedita consequatur quia in", false));
listaTareas.agregar(new Tarea ("quo adipisci enim quam ut ab", true));
listaTareas.agregar(new Tarea ("molestiae perspiciatis ipsa", false));
listaTareas.agregar(new Tarea ("illo est ratione doloremque quia maiores aut",true));

var listaElement = document.getElementById("listaTareas");

listaTareas.mostrar(listaElement);

var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.onclick = function (){
  var nuevaTarea = document.getElementById("nuevaTarea").value;
  listaTareas.agregar(new Tarea (nuevaTarea));
  listaTareas.mostrar(listaElement);
  document.getElementById("nuevaTarea").value = "";
}

function eliminar (e) {
   listaTareas.tareas [ parseInt(e.id) ].completed = true;
   listaTareas.mostrar(listaElement);
}

function recuperar (e) {
   listaTareas.tareas [ parseInt(e.id) ].completed = false;
   listaTareas.mostrar(listaElement);
}

function editar (e) {
  listaTareas.tareas[parseInt(e.id)].title = prompt("Edite la tarea");
  if(listaTareas.tareas[parseInt(e.id)].title == ""){
    alert("Ops! La edición está en blanco");
    listaTareas.tareas[parseInt(e.id)].title = prompt("Edite la tarea");
  }
  listaTareas.mostrar(listaElement);
}
