import {Todo} from '../classes';
import { todoList } from '../index';
// Referencias en el html
const divTodoList=document.querySelector('.todo-list');
const txtInput =document.querySelector('.new-todo');
const btnBorrar= document.querySelector('.clear-completed');
const ulFiltros=document.querySelector('.filters');
const anchorFiltros= document.querySelectorAll('.filtro');
const countTodos=document.querySelector('.todo-count');

// Crear en el html el todo
export const crearTodoHtml=(todo)=>{

    const htmlTodo=
    `<li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
      <div class="view">
           <input class="toggle" type="checkbox"${(todo.completado)?'checked':''}>
           <label>${todo.tarea}</label>
           <button class="destroy"></button>
     </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div=document.createElement('div');
    div.innerHTML=htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}


// Crear el conteo de pendientes
export const crearCountHtml=()=> {
    
    if(todoList.todos.length>0){
        const pendientes=todoList.todos.filter((element)=>element.completado==false)
        countTodos.firstChild.innerHTML=pendientes.length;
    }else{
        countTodos.firstChild.innerHTML=0;
    }
    

}

// -----------------------------------------------------------------------------------------------
// Eventos


// Evento de cuando levanta la tecla
txtInput.addEventListener('keyup',(event)=>{

    // Verificamos que se apriete enter y que el input tenga valores
    if(event.keyCode===13 && txtInput.value.length >0){

        const nuevoTodo= new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value='';

        crearCountHtml();
    }

    
});

// Evento de click en las listas
divTodoList.addEventListener('click',(event)=>{
    const nombreElemento=event.target.localName;
    const todoElement   =event.target.parentElement.parentElement;
    const todoId        =todoElement.getAttribute('data-id');

    if(nombreElemento.includes('input')){//clic en check
        todoList.marcarCompletado(todoId);
        // El toggle añade la clase si no la tienes
        // Y la remueve en caso de que no la tenga.
        todoElement.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){//clic en la x
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElement);
    } 
    crearCountHtml();

})

// Borrar los completados
btnBorrar.addEventListener('click',()=>{
    // Borrar logicamente los elementos
    todoList.eliminarCompletados();

    // Borrar del html los eleemntos
    for(let i=divTodoList.children.length-1; i>=0; i--){
        const elemento =divTodoList.children[i];
        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
})

// Filtros de Todos/completados/pendientes
ulFiltros.addEventListener('click',(event)=>{

   
    const filtro=event.target.text;

    // Para marcar que haya seleccionado un texto
    if(!filtro){return;}

    anchorFiltros.forEach(element => {
        element.classList.remove('selected');
    });

    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        
         elemento.classList.remove('hidden');
         const completado= elemento.classList.contains('completed');

         switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
         }

    }
    


})