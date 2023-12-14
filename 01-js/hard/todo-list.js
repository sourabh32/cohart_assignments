/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
constructor(){
  this.toDos = []
}
add(toAdd){
  this.toDos.push(toAdd)
}
getAll(){
  return this.toDos
}
clear(){
  this.toDos = []
}
get(index){
  if(index>this.toDos.length-1){
    return null
  }
  return this.toDos[index]
}
update(index,toUpdate){
  this.toDos = this.toDos.map((item,ind) => ind === index ? toUpdate  : item)
}
remove(index){
 this.toDos= this.toDos.filter((item,ind) => index!==ind )
}

}

module.exports = Todo;
