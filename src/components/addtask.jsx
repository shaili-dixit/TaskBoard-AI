import { useState } from "react";

import "../styles/addtask.css";

export default function AddTask({ tasks, setTasks }) {

    const [text, setText] = useState("");

    const [priority, setPriority] = useState("Medium");

    function handleSubmit(e) {

        e.preventDefault();

        if (text.trim() === "") return;

        const newTask = {
    id: Date.now(),
    title: text.trim(),
    priority,
    status: "todo",

    createdAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }),
};

        setTasks([...tasks, newTask]);

        setText("");

        setPriority("Medium");

    }

    return (

        <section className="add-task">

            <h2>Add New Task</h2>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    placeholder="Enter Task"

                    value={text}

                    onChange={(e) => setText(e.target.value)}

                />

                <select

                    value={priority}

                    onChange={(e)=>setPriority(e.target.value)}

                >

                    <option>High</option>

                    <option>Medium</option>

                    <option>Low</option>

                </select>

                <button>

                    Add Task

                </button>

            </form>

        </section>

    );

}