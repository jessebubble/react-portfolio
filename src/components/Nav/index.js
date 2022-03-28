import React from 'react';
import Projects from '../Projects';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { GrUserWorker, GrMailOption, GrFolder } from 'react-icons/gr'

function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w='100%'>
                <Heading 
                    ml='8' size='md' fontWeight='semibold' color='cyan.400'>
                <IconButton icon={<GrMailOption />} isRound='true' 
                    onClick={() =>
                    window.open("mailto:jesseovr@gmail.com")}></IconButton>
                <IconButton ml={2} icon={<GrFolder />} isRound='true' 
                    onClick={() =>
                    window.open("https://docs.google.com/document/d/1Ww0atp3OSEnqGajVBY_iBS2Ku4i8frrvE_MDf5SA0bY/edit?usp=sharing")}></IconButton>
                <IconButton ml={2} icon={<GrUserWorker />} isRound='true' 
                    onClick={ Projects }></IconButton>
                </Heading>

                <Spacer></Spacer>
                <IconButton icon={<FaLinkedin />} isRound='true' 
                    onClick={() =>
                    window.open("https://www.linkedin.com/in/jessebubble/")}></IconButton>
                <IconButton ml={2} icon={<FaGithub />} isRound='true' 
                    onClick={() =>
                    window.open("https://github.com/jessebubble")}></IconButton>
                <IconButton ml={2} icon={<FaInstagram />} isRound='true' 
                    onClick={() =>
                    window.open("https://www.instagram.com/jessebubble/")}></IconButton>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>
        </VStack>
    );
}

export default Nav;

        /* <ul className='nav nav-tabs'>
            <li className='nav-item'>
                Jesse Hernandez
            </li>
            <li className='nav-item'>
                <a 
                href='#about'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                >About Me
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href='#projects'
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
                >Projects
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                >Contact
                </a>
            </li>
        </ul> */
 