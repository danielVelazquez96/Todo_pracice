export class Todo{


    // Retornar una instancia del objeto desde Json
    static fromJson({id,tarea,completado,creado}){
        const tempTodo =new Todo(tarea);

        tempTodo.id        =id;
        tempTodo.completado=completado;
        tempTodo.creado    =creado;

        return tempTodo;
    }

    constructor(tarea){

        this.tarea=tarea;

        //creacion del identificador unico
        this.id = new Date().getTime();
        //variable booleana si se ha realizado la tarea o no
        this.completado=false;
        /* 
             true-completado
             false-no completado
         */
        // Fecha de creacion de la tarea
        this.creado=new Date();
    }


}