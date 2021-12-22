
import './styles.css';

// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

// Importacion del archivo que tiene agrupadas las clases
// Cuando no se especifica el archivo agarra automaticamente el index
import { Todo, TodoList } from './classes';
import { crearCountHtml, crearTodoHtml } from './js/componentes';

export const todoList= new TodoList();



// cuando se llama un metodo en un foreach si pueden reducir como la siguiente sentencia
// Por cada argumneto del foreach va a ser el argumneto de la funcion llamada
// Esto solo funciona si el metodo tiene 1 argumneto
todoList.todos.forEach(crearTodoHtml);

crearCountHtml();
// console.log(todoList.todos)

// todoList.todos.forEach(element => {
//     crearTodoHtml(element);
// });





// const task=new Todo('Aprender JavaScript!!!');


// todoList.nuevoTodo(task);


// crearTodoHtml(task);


// LOCAL Y SESSION STORAGE
// localStorage.setItem('mi-key','1234');
// sessionStorage.setItem('mi-key','1234a');


// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);