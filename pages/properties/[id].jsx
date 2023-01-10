import React from 'react'
import { fetchProperties } from '../../utils/fetch'
import ImageScrollMenu from "../../components/imagescrollmenu"
import {Box,Flex} from "@chakra-ui/react"


const Details = ({detail}) => {

    console.log(detail)
  return (
    <Flex direction="column" alignItems="center">
    <Box w="60%">
        <ImageScrollMenu data={detail.photos} />
    </Box>
    </Flex>
  )
}

export default Details

export async function getServerSideProps({query}){

    const {id} = query

    const data = await fetchProperties(`https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`)


    return {
        props:{
            detail : data
        }
    }

}