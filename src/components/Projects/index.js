import React from 'react';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { DiJsBadge, DiNodejs, DiJavascript1, DiJavascript } from 'react-icons/di'

function Projects() {
    return (
        <Box alignSelf='center' px='32' py='16'>

        <Flex rounded='xl' direction='column' mt={4} bg='blue.400' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
            window.open("https://jessebubble.github.io/password-generator")}>
            <Icon color='white' p='4' as={DiJsBadge} w='24' h='24' />
            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                Password Generator
            </Text>
        </Flex>

        <Flex rounded='xl' direction='column' mt={4} bg='gray.100' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
            window.open("https://infinite-sea-93313.herokuapp.com")}>
            <Icon color='black' p='4' as={DiNodejs} w='24' h='24' />
            <Text color='black' p='4' fontSize='xl' fontWeight='semibold'>
                We Rate Pets
            </Text>
        </Flex>

        <Flex rounded='xl' direction='column' mt={4} bg='gray.100' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'green.400', }} 
            onClick={() =>
            window.open("https://jessebubble.github.io/weather-dashboard")}>
            <Icon color='black' p='4' as={DiJavascript1} w='24' h='24' />
            <Text color='black' p='4' fontSize='xl' fontWeight='semibold'>
                Weather Dashboard
            </Text>
        </Flex>

        <Flex rounded='xl' direction='column' mt={4} bg='blue.400' h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'green.400', }} 
            onClick={() =>
            window.open("https://jessebubble.github.io/work-day-scheduler")}>
            <Icon color='black' p='4' as={DiJavascript} w='24' h='24' />
            <Text color='black' p='4' fontSize='xl' fontWeight='semibold'>
                Work Day Scheduler
            </Text>
        </Flex>

        </Box>
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
