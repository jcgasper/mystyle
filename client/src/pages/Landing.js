import React from 'react';
import {Link as ReactLink} from 'react-router-dom';
import { VStack, Box, Heading, Flex, Button, Stack, StackDivider, Text } from '@chakra-ui/react';
import heroImage from '../images/hero-image.jpg';

function Landing() {
    return (
        <VStack maxW='container.lg' spacing={10}>
            <Box w='full' height='25rem' marginTop='5em' backgroundImage={heroImage} backgroundPosition='center' backgroundSize='cover'>
                <Flex px={4} w='full' height='full' justify='center' align='center' flexDir='column' gap={5}>
                    <Heading p={5} bg='gray.50' textColor='pink.500'>Build your online wardrobe</Heading>
                    <Box display='flex' justify='space-between' gap={8}>
                        <Button variant='outline' textColor='pink.100' borderColor='pink.100' _hover={{background: 'pink.500',borderColor: 'pink.500'}} as={ReactLink} to='/signup' borderRadius='0' size='lg'>Login</Button>
                        <Button as={ReactLink} to='/signup' borderRadius='0' size='lg' colorScheme='pink' textColor='gray.50'>Sign Up</Button>
                    </Box>
                    
                </Flex>
            </Box>
            <Stack direction={['column','row']} justify='space-around' align='stretch' w='full' >
                <Box boxShadow='md' border='1px' borderColor='gray.200' w='200px' bg='pink.50'>
                    <VStack spacing={8}>
                        <Box m={3} p={2} bg='pink.500' borderRadius='full' boxSize={10} textAlign='center' boxShadow='md' textColor='white' fontWeight='bold' >
                            1
                        </Box>
                        <Box p={3}>
                            Creat Your Account
                        </Box>
                        <Box p={3}>
                            <Button colorScheme='pink' borderRadius={0} as={ReactLink} to='/signup'>Click here!</Button>
                        </Box>
                    </VStack>
                </Box>
                <Box boxShadow='md' border='1px' borderColor='gray.200' w='200px' bg='pink.50'>
                    <VStack spacing={8}>
                        <Box m={3} p={2} bg='pink.500' borderRadius='full' boxSize={10} textAlign='center' boxShadow='md' textColor='white' fontWeight='bold' >
                            2
                        </Box>
                    </VStack>
                </Box>
                <Box boxShadow='md' border='1px' borderColor='gray.200' w='200px' bg='pink.50'>
                    <VStack spacing={8}>
                        <Box m={3} p={2} bg='pink.500' borderRadius='full' boxSize={10} textAlign='center' boxShadow='md' textColor='white' fontWeight='bold' >
                            3
                        </Box>
                    </VStack>
                </Box>
            </Stack>
        </VStack>
    )
}

export default Landing;