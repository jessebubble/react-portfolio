import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { ImHome, ImFileText, ImEnvelop } from 'react-icons/im';

function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w='100%'>
                <Heading 
                    ml='8' size='md' fontWeight='semibold' color='cyan.400'>
                <IconButton icon={<ImEnvelop />} isRound='true' 
                    onClick={() =>
                    window.open("mailto:jesseovr@gmail.com")}></IconButton>
                <IconButton ml={2} icon={<ImFileText />} isRound='true' 
                    onClick={() =>
                    window.open("https://docs.google.com/document/d/1Ww0atp3OSEnqGajVBY_iBS2Ku4i8frrvE_MDf5SA0bY/edit?usp=sharing")}></IconButton>
                {/* <IconButton ml={2} icon={<ImHome />} isRound='true'  onClick={toggleColorMode}></IconButton> */}
                <Menu>
                    <MenuButton
                        ml={2}
                        as={IconButton}
                        aria-label='options'
                        icon={<ImHome />}
                        isRound='true'
                        />
                    <MenuList>
                        <MenuItem to='/about'>About</MenuItem>
                        <MenuItem to='/projects'>Projects</MenuItem>
                        <MenuItem >Contact</MenuItem>
                        <MenuItem>JesseBubble</MenuItem>
                    </MenuList>
                </Menu>
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
 