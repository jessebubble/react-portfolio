import React from 'react';

function Projects(){
    return (
        <section id='work' class='work'>
            <h1>Projects</h1>
            <div class='projects'>
                <article class='projects'>
                    <a href=' https://jessebubble.github.io/password-generator'><img src={require(`../../assets/images/passwordgenerator.png`)} alt="" /></a>
                    <div class='project info'>
                        <h3>Password Generator</h3>
                        <h4>Javascript</h4>
                    </div>
                </article>
                <article class='projects'>
                    <a href='https://infinite-sea-93313.herokuapp.com'><img src={require(`../../assets/images/weratepets.png`)} alt="" /></a>
                    <div class='project info'>
                        <h3>We Rate Pets</h3>
                        <h4>Full Stack</h4>
                    </div>
                </article>
                <article class='projects'>
                    <a href='https://jessebubble.github.io/weather-dashboard/'><img src={require(`../../assets/images/weatherdashboard.png`)} alt="" /></a>
                    <div class='project info'>
                        <h3>Weather Dashboard</h3>
                        <h4>javascript</h4>
                    </div>
                </article>
                <article class='projects'>
                    <a href='https://jessebubble.github.io/work-day-scheduler/'><img src={require(`../../assets/images/workdayscheduler.gif`)} alt="" /></a>
                    <div class='project info'>
                        <h3>Work Day Scheduler</h3>
                        <h4>Javascript</h4>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Projects;