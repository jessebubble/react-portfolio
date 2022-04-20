import {
    Image,
    Container,
    Flex,
    Box,
    Heading,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
    MdPhone
  } from 'react-icons/md';
  import { BsPerson } from 'react-icons/bs';
  
  function contact() {
    return (
      <Container bg="#" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem > 
                  <Box align='center' > 
                    <Heading align='center'>🌐 Let's Connect! 🌐</Heading>
                    <Image 
                      borderRadius='full'
                      boxSize='150px'
                      objectFit='cover'
                      m={3}
                      src='https://avatars.githubusercontent.com/u/92760924?v=4' 
                      alt='jesse profilepic'
                      />
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack m={-8} spacing={-1} alignItems="center">
                        <Button alignItems='center' justifyContent='left'
                          size="lg"
                          height="48px"
                          width="260px"
                          variant="ghost"
                          color="gray.800"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#FFFF" size="30px" />}>
                          210-816-1234
                        </Button> 
                        <Button alignItems='center' justifyContent='left'
                          size="lg"
                          height="48px"
                          width="260px"
                          variant="ghost"
                          color="gray.800"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#FFFF" size="30px" />}
                          >San Antonio, Texas
                        </Button>
                        <Button alignItems='center' justifyContent='left'
                          size="lg"
                          height="48px"
                          width="260px"
                          variant="ghost"
                          color="gray.800"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#FFFF" size="25px"/>}>
                          jesseovr@gmail.com
                        </Button>
                      </VStack>
                    </Box>

                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }

  export default contact;