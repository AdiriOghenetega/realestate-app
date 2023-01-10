import React from 'react'
import {Box,Flex,Spacer,Text,Menu,MenuButton,MenuList,MenuItem,IconButton,Show, Hide, Icon} from '@chakra-ui/react'
import { AiOutlineMenu,AiFillHome } from "react-icons/ai";
import Link from "next/link"


const Header = () => {
  return (
    <Flex bg="gray.100" justifyContent="space-between" alignItems='center' p="1em 1em">
   <Box>
    <Text fontWeight={700} fontSize="1.5em" color="blue.700" >PHrealty</Text>
   </Box>
  <Hide below='md'>
   <Flex justifyContent="space-around" alignItems="center" w="50%" >
   <Box fontSize="sm"><Link href="/properties/search">Search</Link></Box>
   <Box fontSize="sm"><Link href="/properties/search?purpose=for-sale">Buy Property</Link></Box>
   <Box fontSize="sm"><Link href="/properties/search?purpose=for-rent">Rent Property</Link></Box>
   <Link href="/"><IconButton icon={<AiFillHome />} fontSize="sm" /></Link>
   </Flex>
  </Hide>
   <>
  <Show below='md'>
  <Menu>
   <MenuButton as={IconButton} icon={<AiOutlineMenu d />} />
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