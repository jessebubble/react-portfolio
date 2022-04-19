import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaInstagram, FaRegFileWord, FaTwitter } from 'react-icons/fa';
import { ImEnvelop } from 'react-icons/im';

function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w='100%'>
                <Heading 
                    ml='8'
                    size='md' 
                    fontWeight='semibold'
                ></Heading> 
                <IconButton icon={<ImEnvelop />} isRound='true' color='green.500'
                    onClick={() =>
                    window.open("mailto:jesseovr@gmail.com")}>
                </IconButton>
                <IconButton ml={2} icon={<FaRegFileWord />} isRound='true' color='yellow.500'
                    onClick={() =>
                    window.open("https://docs.google.com/document/d/1Ww0atp3OSEnqGajVBY_iBS2Ku4i8frrvE_MDf5SA0bY/edit?usp=sharing")}></IconButton>
                <IconButton ml={2} icon={<FaTwitter />} isRound='true' color='blue.500'
                    onClick={() =>
                    window.open("https://twitter.com/jessebubble")}></IconButton>
                <Spacer></Spacer>
                <IconButton icon={<FaLinkedin />} isRound='true' color='blue.400'
                    onClick={() =>
                    window.open("https://www.linkedin.com/in/jessebubble/")}></IconButton>
                <IconButton ml={2} icon={<FaGithub />} isRound='true' color='white.400'
                    onClick={() =>
                    window.open("https://github.com/jessebubble")}></IconButton>
                <IconButton ml={2} icon={<FaInstagram />} isRound='true' color='orange.400'
                    onClick={() =>
                    window.open("https://www.instagram.com/jessebubble/")}></IconButton>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' color='red.600' onClick={toggleColorMode}></IconButton>
            </Flex>
        </VStack>
    );
}

export default Nav;