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

                if (item.status === "todo") {
                    return {
                        ...item,
                        status: "progress"
                    };
                }

                if (item.status === "progress") {
                    return {
                        ...item,
                        status: "done"
                    };
                }

                return item;
            })
        );
    }

    function moveBackward() {

        setTasks(prev =>
            prev.map(item => {

                if (item.id !== task.id) return item;

                if (item.status === "done") {
                    return {
                        ...item,
                        status: "progress"
                    };
                }

                if (item.status === "progress") {
                    return {
                        ...item,
                        status: "todo"
                    };
                }

                return item;
            })
        );
    }

    function saveTask() {

        if (newTitle.trim() === "") return;

        setTasks(prev =>
            prev.map(item =>
                item.id === task.id
                    ? {
                        ...item,
                        title: newTitle
                    }
                    : item
            )
        );

        setEditing(false);
    }

    return (

        <div className="task-card">

            {
                editing ? (

                    <div className="task-header">

                        <input
                            className="edit-input"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    saveTask();
                                }
                            }}
                        />

                        <button
                            className="save-btn"
                            onClick={saveTask}
                        >
                            Save
                        </button>

                    </div>

                ) : (

                    <div className="task-header">

                        <h4>
                            📌 {task.title}
                        </h4>

                        <div className="task-icons">

                            <button
                                className="icon-btn edit-icon"
                                onClick={() => setEditing(true)}
                                title="Edit"
                            >
                                ✏️
                            </button>

                            <button
                                className="icon-btn delete-icon"
                                onClick={deleteTask}
                                title="Delete"
                            >
                                🗑️
                            </button>

                        </div>

                    </div>

                )
            }

            <div className="task-info">

                <span
                    className={`priority ${task.priority.toLowerCase()}`}
                >
                    {task.priority}
                </span>

                {
                    task.createdAt && (
                        <span className="task-date">
                            📅 {task.createdAt}
                        </span>
                    )
                }

            </div>

            <div className="task-buttons">

                {
                    status !== "todo" && (

                        <button
                            className="move-btn"
                            onClick={moveBackward}
                        >
                            ← Back
                        </button>

                    )
                }

                {
                    status !== "done" && (

                        <button
                            className="move-btn"
                            onClick={moveForward}
                        >
                            Next →
                        </button>

                    )
                }

            </div>

        </div>

    );
}