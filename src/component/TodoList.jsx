function TodoList({todos, onTodoRemove}) {
    return (
        <div>
            <ul>
            {todos.map((todo, index) =>
                <li key={index}>
                <span>{todo}</span>
                <button onClick={() => onTodoRemove(todo)}>delete</button>
                </li>
            )}
            </ul>
        </div>
    )
}

export default TodoList