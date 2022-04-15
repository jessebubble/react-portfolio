import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';


function About(){
    return (
        <Flex ml={60} w='100%' maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}>
            <Box alignSelf='right'  px='32' py='16' ml={20}>
                <Heading alignSelf='center' fontWeight='extrabold' color='cyan.500' size='4xl'>
                    Full Stack Web Developer
                </Heading>
                <Text fontSize='2xl' color='gray.400'>Certificate 📜</Text>
                <Text fontSize='2xl' color='gray.400'>University of Texas, San Antonio</Text>
            </Box>
            <Box alignSelf='center' px='32' py='16'>
                <Text as='abbr' fontWeight='bold' fontSize='20px' color='teal'>
                Strong interpersonal and communication skills. <br></br>
                <br></br>
                Working in the highly regulated world of insurance taught me how to adapt in a changing professional environment. <br></br>
                <br></br>
                Looking forward to learning and growing with my new team of Software Engineers.
                </Text>
            </Box>
        </Flex>


    );
}
    
export default About;

/*         <section id='about-me' class='about-me'>
            <div class='block-header'><h2>About Me</h2></div>
            <div><img src={require(`../../assets/images/profilepic.jpeg`)} alt="" /></div>
            <div class='block-info about-me-info'>
                <p>Software Engineer in Training</p>
            </div>
        </section> */
