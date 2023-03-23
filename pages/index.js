import React, { useState } from 'react';
import Home from "./home"


import Box from "@mui/material/Box";

import {
  IconButton,
  Divider,
  Avatar,
  Nav,
  CloseButton,
  Button,
  Flex,
  Heading,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
 
  Input,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Container,
  Spacer,
  Link,
  background,
} from '@chakra-ui/react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';



import {Grid,GridItem } from "@chakra-ui/react"
import Trend from './trend';
import Explore from './explore';
import Settings from './settings';
import Favourties from "./favour";
import Billing from "./billing";
import {AiOutlineMenu} from "react-icons/ai"






function Homeee() {

    const[menudata,setMenudata] = useState("")
 
  
  const boxStyles = {
   bg:'white',
    ':hover':{
      color:'black',
      bg:'gray.100'
    }
  }

  
  const boxStyles1 = {
    bg:'white',
    borderColor:'white',
     ':hover':{
       color:'white',
       bg:'skyblue'
     }
   }
      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = React.useRef()


      function Form1() {
        alert('Anish')
      }   

      function Form2() {
        alert('Are you Sure,want to sign out')
      }

      
      function Form5() {
        alert('Hurry! ,You Have No Messages Yet')
      }
      
     
  return (
    
      <>
    <div >
      <Grid templateColumns="repeat(5,1fr)">
    
    <GridItem>
      <Box
flexDir='row'
overflow='auto'
// mb={100}
// width='1000px'

>
  
 <Flex
// h="100vh"
//  flexDir='column'
//  borderRight='1px solid'
//  className='border1'

//  backgroundColor='white'
//  color='#020202'
>
  <Flex 
  flexDir='column'
  justifyContent='space-between'>
    <Flex
    flexDir='column'
    as='sidebar'
    
   >

    
     

    </Flex>

    </Flex>

  </Flex>

 
    

  </Box>
  </GridItem>
    
    
    
    
    <GridItem colSpan="5">
    
      

      

      
      <Flex as={Nav}
     
      h="13vh"
      w="100%"
      bg="white"
      borderBottom="1px solid" 
      className=' border'
    
      color="black">



<Button       
      aria-label="options"
      
      color="black"
      variant="outline"
      display="flex" 
      alignSelf="center"
      // mt={4}
      size="lg"
      onClick={onOpen} >
      <AiOutlineMenu />
      </Button>
      <Drawer 
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent  bg="white">
          <DrawerCloseButton />
          <DrawerHeader>
            Logo
          </DrawerHeader>
          <DrawerBody>
          <Flex  >
        <a className='side-bar0' fontSize='2xl' onClick={()=>setMenudata("Home")}>
          <Icon as={FiHome} className="side-bar2" />
          <Text  ml={8}  className="side-bar1" >Home</Text>
          </a>
          </Flex>

            
         <Flex  >
          <a  className='side-bar0' fontSize='2xl' onClick={()=>setMenudata("Trend")}>
          <Icon as={FiTrendingUp} className="side-bar2" />

          <Text ml={8} className="side-bar1">Trending</Text>
          </a>
         </Flex>

         <Flex   >
          <a className='side-bar0'   fontSize='2xl'  onClick={()=>setMenudata("Explore")}>
         
          <Icon as={ FiCompass} className="side-bar2" />
          <Text ml={8} className='side-bar1' >Explore</Text>
          </a>
         </Flex>

         <Flex   >
         <a  className='side-bar0'  onClick={()=>setMenudata("Favourties")}>
          <Icon as={FiStar} className="side-bar2"/>
          <Text ml={8} className="side-bar1">Favourites</Text>
          </a>
         </Flex>

         <Flex   >
         <a className='side-bar0' onClick={()=>setMenudata("Settings")}>
          <Icon as={FiSettings} className="side-bar2" />
          
        
          <Text ml={8} className="side-bar1">Settings</Text>
          </a>
         </Flex>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

<Spacer />

    <Heading  color="red" display="flex" alignSelf="center">
      LOGO
    </Heading>
        
          <Spacer />
        <HStack spacing={{ base: '0', md: '6'  }} >
        <IconButton
         className="belling"
          size="lg"
          variant="ghost"
          aria-label="open menu"
          colorScheme="black"
          icon={<FiBell />}
          onClick={Form5}       />
        <Flex alignItems={'center'}  flexGrow="1" >
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  w="70%"
                  ml="2">
                  <Text fontSize="1.3rem">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              //  bg={useColorModeValue('white','gray.900')}
              //  borderColor={useColorModeValue('gray.200', 'gray.700')}
              bg="white"
              borderColor="white"
             >
              <MenuItem sx={boxStyles}  onClick={Form1}>Profile</MenuItem>
              <MenuItem sx={boxStyles}  onClick={()=>setMenudata("Settings")}>Settings</MenuItem>
              <MenuItem sx={boxStyles}  onClick={()=>setMenudata("Billing")}>Billing</MenuItem>
              <MenuDivider/>
              <MenuItem sx={boxStyles} onClick={Form2}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
      </Flex>
      <Box>
          {menudata == "Home" && <Home />}
          {menudata == "Trend" && <Trend />}
          {menudata == "Explore" && <Explore />}
          {menudata == "Favourties" && <Favourties />}
          {menudata == "Settings" && <Settings />}
          {menudata == "Billing" && <Billing />}
        </Box>

      

      </GridItem>
      
     
  </Grid>
                  
        
  
 
    
      </div>
      </>
  )
}



export default Homeee;




