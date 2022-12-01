// import
import Todo from './../model';

export async function deleteTodoController (req, res){
    const todoId = req.params.todoId;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    res.json(deletedTodo);
}