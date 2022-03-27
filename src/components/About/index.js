import React from 'react';

function About(){
    return (
        <section id='about-me' class='about-me'>
            <div class='block-header'><h2>About Me</h2></div>
            <div><img src={require(`../../assets/images/profilepic.jpeg`)} alt="" /></div>
            <div class='block-info about-me-info'>
                <p>Software Engineer in Training</p>
            </div>
        </section>
    );
}

export default About;