import React from 'react';

function Contact(){
    return (
        <section id='contact-me' class='contact'>
            <div>
                <h3>Online Presence</h3>
            </div>
            <div class='contact-info'>
                <a href='https://github.com/jessebubble'><img src={require(`../../assets/images/GitHub.png`)} alt=""/></a>
                <a href='https://www.linkedin.com/in/jessebubble'><img src={require(`../../assets/images/linkedin.png`)} alt=""/></a>
            </div>
        </section>
    );
}

export default Contact;