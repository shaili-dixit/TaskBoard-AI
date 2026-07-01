import "../styles/board.css";

import Column from "./column";

export default function Board({ tasks, setTasks }) {

    const todo = tasks.filter(task => task.status === "todo");
    const progress = tasks.filter(task => task.status === "progress");
    const done = tasks.filter(task => task.status === "done");

    return (

        <section className="board">

            <Column
                title="To Do"
                status="todo"
                tasks={todo}
                setTasks={setTasks}
            />

            <Column
                title="In Progress"
                status="progress"
                tasks={progress}
                setTasks={setTasks}
            />

            <Column
                title="Done"
                status="done"
                tasks={done}
                setTasks={setTasks}
            />

        </section>

    );

}