import { useState } from "react"

export default function TodoApp() {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    className="todoInput"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Create todo"
                    className="buttonCreate"
                    onClick={handleSubmit}
                />
            </form>

            <div className="todosContainer">
                {
                    todos.map(item => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

