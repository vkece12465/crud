// Create Todo Controller
import Todo from './../model/Todo'

export async function CreateTodoController(req, res){
    const newTodo = new Todo ({
        title: req.title
    })
    const createNewTodo = await newTodo.save()
    res.json(createNewTodo)
}

// try catch
// empty string