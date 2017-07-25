function Tarea (title, completed ){
  this.title = title;
  this.completed = false;
  this.terminado = function(){
    this.completed = true;
  }
  this.noTerminado = function(){
    this.completed = false;
  }
  this.toHTML = function(){
    var tarea = "";
    tarea += "- ";
    tarea += this.title;
    return tarea;
  }
}

function ListaCompleta () {
  this.tareas = [];
  this.agregar = function (tarea){
    this.tareas.push(tarea);
  }
  this.mostrar = function(element){
    var stringHtml = "";
    element.innerHTML = stringHtml;
    for (var i in this.tareas){
      var task = this.tareas[i];
      if(task.completed){
        stringHtml += "<li style = background-color:yellow>" + task.toHTML() + "</li>";
      } else {
        stringHtml += "<li>" + task.toHTML() + "</li>";
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
listaTareas.agregar(new Tarea ("delectus aut autem"));
listaTareas.agregar(new Tarea ("quis ut nam facilis et officia qui"));
listaTareas.agregar(new Tarea ("fugiat veniam minus"));
listaTareas.agregar(new Tarea ("et porro tempora"));
listaTareas.agregar(new Tarea ("laboriosam mollitia et enim quasi adipisci quia provident illum"));
listaTareas.agregar(new Tarea ("qui ullam ratione quibusdam voluptatem quia omnis"));
listaTareas.agregar(new Tarea ("illo expedita consequatur quia in"));
listaTareas.agregar(new Tarea ("quo adipisci enim quam ut ab"));
listaTareas.agregar(new Tarea ("molestiae perspiciatis ipsa"));
listaTareas.agregar(new Tarea ("illo est ratione doloremque quia maiores aut"));

var listaElement = document.getElementById("listaTareas");
listaTareas.mostrar(listaElement);

var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.onclick = function (){
  var nuevaTarea = document.getElementById("nuevaTarea").value;
  listaTareas.agregar(new Tarea (nuevaTarea));
  listaTareas.mostrar(listaElement);
}
