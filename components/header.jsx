import React from 'react'
import {Box,Flex,Spacer,Switch,Text,Menu,MenuButton,MenuList,MenuItem,IconButton,Show, Hide, Icon,useColorMode,useColorModeValue} from '@chakra-ui/react'
import { AiOutlineMenu,AiFillHome } from "react-icons/ai";
import Link from "next/link"


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  // const value = useColorModeValue(lightModeValue, darkModeValue)
  const bg = useColorModeValue("gray.100", "gray.700")
  const logoColor=useColorModeValue("blue.700","blue.100")
  

  return (
    <Flex bg={bg} justifyContent="space-between" alignItems='center' p="1em 0.5em" paddingLeft="1.5em">
   <Box>
   <Link href="/" passHref>
    <Text fontWeight={700} fontSize="1.5em" color={logoColor} fontFamily="serif"  >PHrealty</Text>
   </Link>
   </Box>
  <Hide below='md'>
   <Flex justifyContent="space-around" alignItems="center" w="50%" >
   <Box fontSize="sm"><Link href="/properties/search">Search</Link></Box>
   <Box fontSize="sm"><Link href="/properties/search?purpose=for-sale">Buy Property</Link></Box>
   <Box fontSize="sm"><Link href="/properties/search?purpose=for-rent">Rent Property</Link></Box>
   <Box>
   <Switch onChange={()=>toggleColorMode()} m="2" />
   <Link href="/"><IconButton icon={<AiFillHome />} fontSize="sm" /></Link>
   </Box>
   </Flex>
  </Hide>
   <>
  <Show below='md'>
  <Spacer />
  <Switch onChange={()=>toggleColorMode()} m="2" />
  <Menu>
   <MenuButton as={IconButton} icon={<AiOutlineMenu />} />
    <MenuList>
      <MenuItem fontSize="sm"><Link href="/properties/search">Search</Link></MenuItem>
      <MenuItem fontSize="sm"><Link href="/properties/search?purpose=for-sale">Buy Property</Link></MenuItem>
      <MenuItem fontSize="sm"><Link href="/properties/search?purpose=for-rent">Rent Property</Link></MenuItem>
      <MenuItem fontSize="sm"><Link href="/"><IconButton  icon={<AiFillHome />} fontSize="sm" /></Link></MenuItem>
    </MenuList>
    </Menu>
  </Show>
</>
   
    </Flex>
  )
}

export default Header