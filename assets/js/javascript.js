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
