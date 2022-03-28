import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w='100%'>
                <Heading 
                    ml='8' size='md' fontWeight='semibold' color='cyan.400'>Jesse HernandezIII
                </Heading>

                <Spacer></Spacer>
                <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
                <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
                <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
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
 