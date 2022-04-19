import React from 'react';
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

function About(){
    return (
        <Stack
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}>
        <Text
          fontWeight='semibold'
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'3xl'}>
              An innovative problem-solver with strong interpersonal and communication skills.
              <br></br>
              <br></br>
              Current focus is on mobile-first design and development.
              <br></br>
              <br></br>
              Holds a Full Stack Web Development certificate from the University of Texas, San Antonio. 
              <br></br>
              <br></br>
              Excited to leverage my skills as part of a fast-paced, quality-driven team.

        </Text>
        <Box textAlign={'center'}>
          <Avatar 
            src={
              'https://avatars.githubusercontent.com/u/92760924?v=4'
            }
            alt={'profile pic Jesse'}
            mb={2}
          />
  
          <Text fontWeight={600}>Jesse Hernandez</Text>
          <Text fontWeight='semibold' fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.600')}>
            Web Developer
          </Text>
        </Box>
      </Stack>
    );
  }
    
export default About;
