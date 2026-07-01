import "../styles/hero.css";

export default function Hero(){

    return(

        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">

                    🚀 Sprint 04 Project

                </span>

                <h1>

                    Organize Your Work

                    <span> Like a Pro</span>

                </h1>

                <p>

                    Manage tasks efficiently with a modern Kanban Board built using React.js.

                    Create, edit, organize and complete your workflow effortlessly.

                </p>

                <a href="#board">

                    <button>

                        Get Started →

                    </button>

                </a>

            </div>

        </section>

    );

}