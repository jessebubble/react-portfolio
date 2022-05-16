import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaAngleDoubleDown } from 'react-icons/fa';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

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
                <IconButton ml={2} variant='outline' icon={<FaTwitter />} isRound='true' color='blue.500'
                    onClick={() =>
                    window.open("https://twitter.com/jessebubble")}>
                </IconButton>
                <IconButton ml={2} variant='outline' icon={<FaInstagram />} isRound='true' color='orange.400'
                    onClick={() =>
                    window.open("https://www.instagram.com/jessebubble/")}>
                </IconButton>
                <IconButton ml={2} variant='outline' icon={<FaGithub />} isRound='true' color='white.400'
                    onClick={() =>
                    window.open("https://github.com/jessebubble")}>
                </IconButton>
                <IconButton ml={2} variant='outline' icon={<FaLinkedin />} isRound='true' color='blue.400'
                    onClick={() =>
                    window.open("https://www.linkedin.com/in/jessebubble/")}>
                </IconButton>

                <Spacer></Spacer>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<FaAngleDoubleDown />}
                        variant='outline'
                        isRound='true'
                        color='green.300'
                    />
                    <MenuList>
                        <MenuItem onClick={() =>
                            window.open("https://docs.google.com/document/d/1Ww0atp3OSEnqGajVBY_iBS2Ku4i8frrvE_MDf5SA0bY/export?format=pdf")}
                            >PDF resume
                        </MenuItem>
                        <MenuItem 
                        onClick={() =>
                            window.open("mailto:jesseovr@gmail.com")}
                            >Email
                        </MenuItem>
                        <MenuItem
                        onClick={() =>
                            window.open("https://github.com/jessebubble")}
                            >Projects
                        </MenuItem>
                        <MenuItem
                        onClick={() =>
                            window.open("https://www.instagram.com/jessebubble")}
                        >Who is Jesse
                        </MenuItem>
                    </MenuList>
                </Menu>
                <IconButton ml={2} variant='outline' icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' color='green.400' 
                    onClick={toggleColorMode}>
                </IconButton>
            </Flex>
        </VStack>
    );
}

export default Nav;

               
                
                