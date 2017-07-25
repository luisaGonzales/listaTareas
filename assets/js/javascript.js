function Tarea (id, title, completed ){
  this.id = id;
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
    tarea += this.id + ". ";
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
}
