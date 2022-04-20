import React from 'react';
import Icon from '@chakra-ui/icon';
import {Text } from '@chakra-ui/layout';
import { Image, Wrap, WrapItem } from '@chakra-ui/react'
import { DiJsBadge, DiJavascript1, DiJavascript, DiReact, DiDatabase } from 'react-icons/di'

function Projects() {
    return (
        <Wrap m={20} justify='center'>
            <WrapItem
            rounded='xl' direction='column' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='60vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
                window.open("https://jam-group-project.herokuapp.com/")}>
            <Icon color='red.300' p='1' as={DiReact} w='24' h='24' />
            <Text color='gray.800' p='4' fontSize='xl' fontWeight='bold'>
                Parachute <br></br>
                Play 🪂
            </Text>
            <Image 
            borderRadius='full'
            boxSize='200px'
            objectFit='cover'
            position='absolute'
            alignSelf='end'
            m={10}
            src='https://images.unsplash.com/photo-1611612902179-6981272bbd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80' 
            alt='parachute'
            />
            </WrapItem>
            <WrapItem
            rounded='xl' direction='column' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='60vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
                window.open("https://jessebubble.github.io/password-generator")}>
            <Icon color='green.300' p='3' as={DiJsBadge} w='24' h='24' />
            <Text color='gray.800' p='4' fontSize='xl' fontWeight='bold'>
                Password Generator 🔑
            </Text>
            <Image 
            borderRadius='full'
            boxSize='200px'
            objectFit='cover'
            position='absolute'
            alignSelf='end'
            m={10}
            src='https://images.unsplash.com/photo-1614064850003-13dbfd69fd11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
            alt='key lock'
            />
            </WrapItem>
            <WrapItem
            rounded='xl' direction='column' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='60vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
                window.open("https://jessebubble.github.io/weather-dashboard")}>
            <Icon color='yellow.300' p='1' as={DiJavascript1} w='24' h='24' />
            <Text color='gray.800' p='4' fontSize='xl' fontWeight='bold'>
                Weather Dashboard 🌧️
            </Text>
            <Image 
            borderRadius='full'
            boxSize='200px'
            objectFit='cover'
            position='absolute'
            alignSelf='end'
            m={10}
            src='https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1519&q=80' 
            alt='nature trail'
            />
            </WrapItem>
            <WrapItem
            rounded='xl' direction='column' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='60vh' w='30vh' justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
                window.open("https://jessebubble.github.io/work-day-scheduler")}>
            <Icon color='green.300' p='1' as={DiJavascript} w='24' h='24' />
            <Text color='gray.800' p='4' fontSize='xl' fontWeight='bold'>
                Work Day Scheduler 🗓️
            </Text>
            <Image 
            borderRadius='full'
            boxSize='200px'
            objectFit='cover'
            position='absolute'
            alignSelf='end'
            m={10}
            src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' 
            alt='light bulb'
            />
            </WrapItem>
            <WrapItem
            rounded='xl' direction='column' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='60vh' w='30vh'  justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
            window.open("")}>
            <Icon color='red.300' p='1' as={DiDatabase} w='24' h='24' />
            <Text color='gray.800' p='4' fontSize='xl' fontWeight='bold'>
                Application In <br></br> 
                Development 🔮                 
            </Text>
            <Image 
            borderRadius='full'
            boxSize='200px'
            objectFit='cover'
            position='absolute'
            alignSelf='end'
            m={10}
            src='https://images.unsplash.com/photo-1607720146778-68d2d56fa38c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80' 
            alt='construction workers'
            />
            </WrapItem>
            {/* <WrapItem
            rounded='xl' direction='column' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' h='60vh' w='30vh'  justify='flex-end' _hover={{ bg: 'teal.400', }} 
            onClick={() =>
            window.open("")}>
            <Icon color='red.300' p='1' as={DiDatabase} w='24' h='24' />
            <Text color='gray.800' p='4' fontSize='xl' fontWeight='bold'>
                Application In <br></br> 
                Development 🔮 
            </Text>
            <Image 
            borderRadius='full'
            boxSize='200px'
            objectFit='cover'
            position='absolute'
            alignSelf='end'
            m={10}
            src='https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' 
            alt='construction hat'
            />
            </WrapItem> */}
        </Wrap>

    );
}
    
export default Projects;