import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { Button, Collapse, useDisclosure } from '@chakra-ui/react';
import './button.css' ;

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack>
            <Flex alignSelf='center'>
                <Button bgGradient='linear(to-l, cyan.400, blue.500, purple.600)' variant='ghost' onClick={onToggle}>Hello World</Button>
                <Collapse in={isOpen} animateOpacity>
                    <Box align='center' mt='4'>
                    <Text fontSize='5xl' fontWeight='semibold' bgGradient='linear(to-l, cyan.400, blue.500, purple.600)' bgClip='text'>From the world of selling Property and Casualty insurance </Text>
                    <Text fontSize='5xl' fontWeight='semibold' bgGradient='linear(to-l, cyan.400, blue.500, purple.600)' bgClip='text'>To holding a Full Stack Web Development certificate from UTSA </Text>
                    <Text fontSize='5xl' fontWeight='semibold' bgGradient='linear(to-l, cyan.400, blue.500, purple.600)' bgClip='text'>I’m excited to leverage my skills as part of a fast-paced, quality-driven team.</Text>
                    <Text fontSize='5xl' fontWeight='semibold' bgGradient='linear(to-l, cyan.400, blue.500, purple.600)' bgClip='text'>My name Jesse Hernandez </Text>
                    <Text color={isDark ? 'gray.200' : 'gray.500'}></Text>
                    </Box>
                </Collapse>
            </Flex>
        </Stack>


    );
}
    
export default Header;