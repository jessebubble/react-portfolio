
import "./projects.css";

function Projects() {
    return(
        <section className="card-list">
            <div className="card">
                <div className="card-header">
                    <h2>Animal Farm 🦥</h2>
                    <p>Full Stack ReactJS built<br></br>with NodeJS and ChanceJS</p>
                </div>
                <div className="card-logo">
                    <a className="logo-avatar" href="https://jessebubble-animal-farm.netlify.app">
                        <img src="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsJTIwZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="project" />
                    </a>
                </div>
                <div className="card-github">
                    <a className="github-avatar" href="https://github.com/jessebubble/animal-farm">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>Memory Game 💡</h2>
                    <p>PWA card game built w/ ReactJS <br></br>CSS and hosted on Firebase</p>
                </div>
                <div className="card-logo">
                    <a className="logo-avatar" href="https://jessebubbleproject.web.app/">
                        <img src="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="project" />
                    </a>
                </div>
                <div className="card-github">
                    <a className="github-avatar" href="https://github.com/jessebubble/memory-game">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>Parachute Play 🪂</h2>
                    <p>Full Stack Word Game built using <br></br>the MERN Stack</p>
                </div>
                <div className="card-logo">
                    <a className="logo-avatar" href="https://jam-group-project.herokuapp.com/">
                        <img src="https://images.unsplash.com/photo-1482773958144-74105d550cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHBhcmFjaHV0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="project" />
                    </a>
                </div>
                <div className="card-github">
                    <a className="github-avatar" href="https://github.com/jessebubble/parachute-play">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>Weather Dashboard 🌧️</h2>
                    <p>OpenWeather API app built w/ <br></br>HTML5 + CSS3 + Javascript</p>
                </div>
                <div className="card-logo">
                    <a className="logo-avatar" href="https://jessebubble.github.io/weather-dashboard/">
                        <img src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="project" />
                    </a>
                </div>
                <div className="card-github">
                    <a className="github-avatar" href="https://github.com/jessebubble/weather-dashboard">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>Password Generator 🔑</h2>
                    <p>Javascript Project built w/ <br></br>HTML5 + CSS3 </p>
                </div>
                <div className="card-logo">
                    <a className="logo-avatar" href="https://jessebubble.github.io/password-generator/">
                        <img src="https://github.com/jessebubble/password-generator/blob/main/assets/images/markus-spiske-uPXs5Vx5bIg-unsplash.jpg?raw=true" alt="project" />
                    </a>
                </div>
                <div className="card-github">
                    <a className="github-avatar" href="https://github.com/jessebubble/password-generator">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                    </a>
                </div>
            </div>
            
            <div className="card">
                <div className="card-header">
                    <h2>Stripe Payments 💳</h2>
                    <p>Coming Soon <br></br>Full Stack w/ ReactJS + NodeJS </p>
                </div>

                <div className="card-logo">
                    <a className="logo-avatar" href="https://github.com/jessebubble/stripe-payments">
                        <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="project" />
                    </a>
                </div>

                <div className="card-github">
                    <a className="github-avatar" href="https://github.com/jessebubble/stripe-payments">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                    </a>
                </div>
            </div>


        </section>
    );
}

export default Projects;