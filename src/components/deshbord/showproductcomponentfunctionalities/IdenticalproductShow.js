import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchItem } from '../../API/APIreq'
import Allsubcatproducts from './Allsubcatproducts'
import Loader from '../unitcomponents/Loader'
import { Box } from '@mui/material'
import { Frame } from './Showcategories'

function IdenticalproductShow(props) {
  const params=useParams()
  const [data,setData]=useState([])
  const [load,setLoad]=useState(false)
  useEffect(()=>{setLoad(true)
      async function getData(){
      setData(await searchItem({value:params.name}))
      setLoad(false)
    }
  getData()},[params.name])
  
  return (
    <Frame sx={{marginTop:"10px"}}>
    {
      data.length?
      <Allsubcatproducts comptype={'specific'} product={data} productDetails={props.productDetails}/>
      :load&&<Loader/>
   }
    </Frame>
  )
}

export default IdenticalproductShow