import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com/properties/list'

export const fetchProperties =async (url)=>{

    const {data} = await axios.get(url,{
        headers: {
            'X-RapidAPI-Key': 'bbb80bed58mshbd16c9f2d1ba00fp13b52cjsn898c2aabc6d9',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data

}