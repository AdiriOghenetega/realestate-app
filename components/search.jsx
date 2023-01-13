import React,{useEffect,useState} from 'react'
import {useRouter} from "next/router"
import {getFilterValues,filterData} from "../utils/filterData"
import {Box,Flex,Select} from "@chakra-ui/react"

const SearchProperties = () => {
  //state to store filtered values
  const [filterValues,setFilterValues]= useState({
    purpose:"for-sale",
    rentFrequency:'yearly',
    categoryExternalID:"4",
    minPrice:"0",
    maxPrice:"1000000",
    areaMax:"35000",
    roomsMin:"0",
    bathsMin:"0",
    sort:"price-desc",
    locationExternalIDs:"5002",
  } )


  const router = useRouter()

 useEffect(()=>{

   function setFilters(){
    const {
      purpose,
      rentFrequency,
      categoryExternalID,
      minPrice,
      maxPrice,
      areaMax,
      roomsMin,
      bathsMin,
      sort,
      locationExternalIDs,
    } = filterValues;
    router.push(`?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
   }
   setFilters()
 },[filterValues])
   
  
  
  return (
    <Flex flexWrap="wrap" p="4em" paddingTop="1em" alignItems="center" justifyContent="center">
      {
        filterData.map(data=>{
          return <Flex key={data.queryName} p="1em" justifyContent="space-between" >
            
            <Select placeholder={data.placeholder} value={filterValues.queryName} onChange={(e)=>{
              setFilterValues(prev=>{
                return{
                  ...prev,
                  [data.queryName] : e.target.value
                }
              })
              
            }} >
              {data?.items?.map(opt=>{
                return <option value={opt.value} key={opt.name}>{opt.name}</option>
              })}
            </Select>
            </Flex>
        })
      }
    </Flex>
  )
}

export default SearchProperties