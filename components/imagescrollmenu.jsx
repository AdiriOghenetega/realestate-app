import React,{useContext} from"react"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";
import {Box,Flex,Icon} from "@chakra-ui/react"
import Image from "next/image"

const RightArrow = ()=>{
    const {scrollNext} = useContext(VisibilityContext)
    return(
        <Flex onClick={()=>scrollNext()} alignItems="center" justifyContent="flex-end" p="1">
         <Icon as={BsArrowRightCircle} fontSize="2xl" />
        </Flex>
    )
}
const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext)
    return(
        <Flex onClick={()=>scrollPrev()} alignItems="center" justifyContent="flex-start" p="1">
         <Icon as={BsArrowLeftCircle} fontSize="2xl" />
        </Flex>
    )
}

const ImageScrollMenu=({data})=>{
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
       
        {data.map(item=>{
            return <Box key={item.id} w="510px"  overflow="hidden" p="1">
            <Image src={item.url} width={1500} height={400} alt="property-photos" placeholder="blur" blurDataURL={item.url} sizes="(max-width:500px) 100px,(max-width:1023px) 700px,1000px" />
            </Box>
        })}
        
        </ScrollMenu>
    )
}

export default ImageScrollMenu