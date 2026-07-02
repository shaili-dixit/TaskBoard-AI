import { useState } from "react";

import "../styles/task.css";

export default function TaskCard({

    task,
    status,
    setTasks

}) {

    const [editing, setEditing] = useState(false);

    const [newTitle, setNewTitle] = useState(task.title);

    function deleteTask() {

        const confirmDelete = window.confirm(
            `Delete "${task.title}"?`
        );

        if (!confirmDelete) return;

        setTasks(prev =>
            prev.filter(item => item.id !== task.id)
        );

    }

    function moveForward() {

        setTasks(prev =>

            prev.map(item => {

                if (item.id !== task.id) return item;

                if (item.status === "todo")

                    return {

                        ...item,

                        status: "progress"

                    };

                if (item.status === "progress")

                    return {

                        ...item,

                        status: "done"

                    };

                return item;

            })

        );

    }

    function moveBackward() {

        setTasks(prev =>

            prev.map(item => {

                if (item.id !== task.id) return item;

                if (item.status === "done")

                    return {

                        ...item,

                        status: "progress"

                    };

                if (item.status === "progress")

                    return {

                        ...item,

                        status: "todo"

                    };

                return item;

            })

        );

    }

    function saveTask() {

        if (newTitle.trim() === "") return;

        setTasks(prev =>

            prev.map(item =>

                item.id === task.id

                    ? { ...item, title: newTitle }

                    : item

            )

        );

        setEditing(false);

    }

    return (

        <div className="task-card">

            {

                editing ?

                    <input

                        className="edit-input"

                        value={newTitle}

                        onChange={(e) => setNewTitle(e.target.value)}

                    />

                    :

                    <h4>

                        📌 {task.title}

                    </h4>

            }

            <span className={`priority ${task.priority.toLowerCase()}`}>

                {task.priority}

            </span>

            {

                editing ?

                    <button

                        className="save-btn"

                        onClick={saveTask}

                    >

                        Save

                    </button>

                    :

                    <button

                        className="edit-btn"

                        onClick={() => setEditing(true)}

                    >

                        Edit

                    </button>

            }

            <div className="task-buttons">

                {

                    status !== "todo" &&

                    <button

                        className="move-btn"

                        onClick={moveBackward}

                    >

                        ← Back

                    </button>

                }

                {

                    status !== "done" &&

                    <button

                        className="move-btn"

                        onClick={moveForward}

                    >

                        Next →

                    </button>

                }

            </div>

            <button

                className="delete-btn"

                onClick={deleteTask}

            >

                Delete

            </button>

        </div>

    );

}