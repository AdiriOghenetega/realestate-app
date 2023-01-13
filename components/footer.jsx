import React from 'react'
import {Box,Text,useColorModeValue} from "@chakra-ui/react"

const Footer = () => {
  // const value = useColorModeValue(lightModeValue, darkModeValue)
  const bg = useColorModeValue("gray.100", "gray.700")
  return (
    <Box bg={bg} p="1em" textAlign="center" position="relative" >
        <Text fontSize="11px">&copy; Adiri Oghenetega</Text>
    </Box>
  )
}

export default Footer