import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
/* import { Button } from '@chakra-ui/button'; */
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Stack>
            <Circle position='absolute' bg='blue.100' opacity='0.1'
                w='300px' h='300px' alignSelf='flex-end' />
            <Flex alignSelf='flex-start'>
                <Box align='flex-start'>
                    <Text fontSize='5xl' fontWeight='semibold'> Hello, my name is Jesse </Text>
                    <Text fontSize='7xl' fontWeight='bold' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip='text'>Software Engineer in training  </Text>
                    <Text color={isDark ? 'gray.200' : 'gray.500'}></Text>
{/*                     <Button mt={8} colorScheme='blue' onClick={() =>
                        window.open("https://jessebubble.github.io/react-portfolio/")}>jessebubble
                    </Button> */}
                </Box>

                <Image
                    alignSelf='center' 
                    borderRadius='full'
                    backgroundColor='transparent' boxShadow='lg'
                    boxSize='300px' src='https://media-exp1.licdn.com/dms/image/C4E03AQFUIV-XQxTrHg/profile-displayphoto-shrink_800_800/0/1645586933825?e=1654128000&v=beta&t=4XcowoesW4_WzVoATOhJV6sYDAFy8JBQsCKhG5cl56E' />
            </Flex>
        </Stack>
    );
}
    
export default Header;

/*         <section class='hero'>
            <div class='block-header'><h1>Software Engineer in Training</h1></div>
            <div class='block-info'>
                <p>
                Software Engineer with strong interpersonal and communication skills. <br></br>
                Holds a Full Stack Web Development certificate from the University of Texas, San Antonio. <br></br>
                Working in the highly regulated world of insurance taught me how to adapt in a changing professional environment. <br></br>
                A strength that transitions into the world of web development when collaborating on projects and working with clients.
                </p>
            </div>
        </section> */
