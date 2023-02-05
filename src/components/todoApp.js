import { useState } from "react"

export default function TodoApp() {
    const [title, setTitle] = useState("");

    function handleClick(e) {
        e.preventDefault();
        setTitle('Mar')
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input
                    type="text"
                    className="todoInput"
                    value={title}
                />
                <input
                    type="submit"
                    value="Create todo"
                    className="buttonCreate"
                    onClick={handleClick}
                />

                {title}
            </form>
        </div>
    )
}

