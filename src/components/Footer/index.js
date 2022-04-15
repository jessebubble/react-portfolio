import React from 'react';
import Icon from '@chakra-ui/icon';
import { HStack, Text } from '@chakra-ui/layout';
import { FaLinkedin, FaGithub, FaInstagram, FaMusic, FaCamera, FaTwitter, FaYoutube, FaVideo } from 'react-icons/fa';

function Footer() {
    return (
        <HStack spacing='24' justifyContent='center'>
            <Icon as={FaLinkedin} boxSize='50' />
            <Icon as={FaGithub} boxSize='50' />
            <Icon as={FaInstagram} boxSize='50' />
            <Icon as={FaMusic} boxSize='50' />
            <Icon as={FaCamera} boxSize='50' />
            <Icon as={FaTwitter} boxSize='50' />
            <Icon as={FaYoutube} boxSize='50' />
            <Icon as={FaVideo} boxSize='50' />
            <Text>Jesse HernandezIII</Text>
        </HStack>


    );
}
    
export default Footer;

/*         <section id='contact-me' class='contact'>
            <div>
                <h3>Online Presence</h3>
            </div>
            <div class='contact-info'>
                <a href='https://github.com/jessebubble'><img src={require(`../../assets/images/GitHub.png`)} alt=""/></a>
                <a href='https://www.linkedin.com/in/jessebubble'><img src={require(`../../assets/images/linkedin.png`)} alt=""/></a>
            </div>
        </section> */
