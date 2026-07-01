import "./styles/app.css";

import { useEffect, useMemo, useState } from "react";

import Nav from "./components/nav";
import Hero from "./components/hero";
import AddTask from "./components/addtask";
import Board from "./components/board";
import Footer from "./components/footer";

function App() {

    const [tasks, setTasks] = useState(() => {

        const saved = localStorage.getItem("tasks");

        return saved ? JSON.parse(saved) : [];

    });

    const [search, setSearch] = useState("");

    useEffect(() => {

        localStorage.setItem(

            "tasks",

            JSON.stringify(tasks)

        );

    }, [tasks]);

    const filteredTasks = useMemo(() => {

        return tasks.filter(task =>

            task.title.toLowerCase()

                .includes(search.toLowerCase())

        );

    }, [tasks, search]);

    const stats = {

        total: tasks.length,

        todo: tasks.filter(t => t.status === "todo").length,

        progress: tasks.filter(t => t.status === "progress").length,

        done: tasks.filter(t => t.status === "done").length

    };

    return (

        <>

            <Nav />

            <Hero />

            <main>

                <section className="stats">

                    <div className="stat-card">

                        <h2>{stats.total}</h2>

                        <p>Total Tasks</p>

                    </div>

                    <div className="stat-card">

                        <h2>{stats.todo}</h2>

                        <p>To Do</p>

                    </div>

                    <div className="stat-card">

                        <h2>{stats.progress}</h2>

                        <p>In Progress</p>

                    </div>

                    <div className="stat-card">

                        <h2>{stats.done}</h2>

                        <p>Completed</p>

                    </div>

                </section>

                <section className="search-section">

                    <input

                        type="text"

                        placeholder="🔍 Search Tasks..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />

                </section>

                <AddTask

                    tasks={tasks}

                    setTasks={setTasks}

                />

                <Board

                    tasks={filteredTasks}

                    setTasks={setTasks}

                />

            </main>

            <Footer />

        </>

    );

}

export default App;