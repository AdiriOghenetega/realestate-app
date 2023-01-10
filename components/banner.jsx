import React from 'react'
import {Box,Text,Flex,Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link"

const Banner = ({title,desc,cta,url,purpose}) => {
  return (
    <Flex bg="gray.100" w="50%" alignItems="center" justifyContent="space-around" p="1em" marginTop="1em" >
    <Box bg="black">
        <Image src={url}  height="350" width="350" alt="static image" placeholder="blur" blurDataURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110799000/13c5ddeb3710480ab040480678519575"  />
    </Box>
    <Box >
        <Text fontWeight="black">{title}</Text>
        <Text fontSize="sm">{desc}</Text>
        <Text fontSize="sm">Explore Apartments,Villa,Homes and more...</Text>
        <Button bg="white"><Link href={`/properties/search?purpose=${purpose}`}>{cta}</Link></Button>
    </Box>
    </Flex>
  )
}

export default Banner