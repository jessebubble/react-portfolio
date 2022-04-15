import React from 'react';
import Icon from '@chakra-ui/icon';
import {Text } from '@chakra-ui/layout';
import { Wrap, WrapItem } from '@chakra-ui/react'
import { DiJsBadge, DiJavascript1, DiJavascript, DiReact } from 'react-icons/di'

function Projects() {
    return (
        <Wrap ml={80}>
            <WrapItem
            rounded='xl' direction='column' mt={4} bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
                window.open("https://jam-group-project.herokuapp.com/")}>
            <Icon color='black' p='4' as={DiReact} w='24' h='24' />
            <Text color='black' p='4' fontSize='xl' fontWeight='semibold'>
                Parachute Play 🪂
            </Text>
            </WrapItem>
            <WrapItem
            rounded='xl' direction='column' mt={4} bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
                window.open("https://jessebubble.github.io/password-generator")}>
            <Icon color='white' p='4' as={DiJsBadge} w='24' h='24' />
            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                Password Generator 🔑
            </Text>
            </WrapItem>

            {/* <WrapItem
            rounded='xl' direction='column' mt={4} bg='gray.100' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
            window.open("https://infinite-sea-93313.herokuapp.com")}>
            <Icon color='black' p='4' as={DiNodejs} w='24' h='24' />
            <Text color='black' p='4' fontSize='xl' fontWeight='semibold'>
                We Rate Pets
            </Text>
            </WrapItem> */}

            <WrapItem
            rounded='xl' direction='column' mt={4} bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'green.400', }} 
            onClick={() =>
                window.open("https://jessebubble.github.io/weather-dashboard")}>
            <Icon color='black' p='4' as={DiJavascript1} w='24' h='24' />
            <Text color='black' p='4' fontSize='xl' fontWeight='semibold'>
                Weather Dashboard 🌧️
            </Text>
            </WrapItem>

            <WrapItem
            rounded='xl' direction='column' mt={4} bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'green.400', }} 
            onClick={() =>
                window.open("https://jessebubble.github.io/work-day-scheduler")}>
            <Icon color='white' p='4' as={DiJavascript} w='24' h='24' />
            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                Work Day Scheduler 📅
            </Text>
            </WrapItem>
        </Wrap>

    );
}
    
export default Projects;

/*         <section id='work' class='work'>
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
        </section> */
