import "../styles/nav.css";

export default function Nav() {

    return (

        <header className="navbar">

            <div className="logo">

                📋 TaskBoard AI

            </div>

            <nav>

                <a href="#">Home</a>

                <a href="#board">Board</a>

                <a href="#about">About</a>

            </nav>

        </header>

    );

}