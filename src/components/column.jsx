import "../styles/column.css";

import TaskCard from "./taskcard";

export default function Column({

    title,
    status,
    tasks,
    setTasks

}) {

    return (

        <div className="column">

            <h2>{title}</h2>

            {

                tasks.length === 0 ?

                    <div className="empty">

    <h1>📭</h1>

    <p>

        No Tasks Yet

    </p>

</div>

                    :

                    tasks.map(task => (

                        <TaskCard

                            key={task.id}

                            task={task}
                            status={status}
                            setTasks={setTasks}

                        />

                    ))

            }

        </div>

    );

}