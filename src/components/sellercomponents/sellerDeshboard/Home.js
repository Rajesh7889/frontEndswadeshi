import { Box} from '@mui/material'
import React from 'react'
import { NavBTns } from './SlrHadr'
import { useNavigate } from 'react-router-dom'
import Img from "./sales-analysis-dashboard.png"
import { ProductImage } from '../../../styles/Showcategories'
const Home = () => {
    const navigate=useNavigate()
  return (
    <Box sx={{width:"100%",minHeight:"100vh",backgroundColor:"rgb(229, 229, 229)"}}>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Box sx={{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:{sm:"30%",xs:"50px"}}}>
             <NavBTns sx={{margin:"70px 0px"}} onClick={()=>navigate("add")}>ADD New Product</NavBTns>
             <NavBTns onClick={()=>navigate("myProducts")}>my products</NavBTns>
         </Box>
         <Box sx={{maxHeight:"500px"}}>
             <ProductImage sx={{maxHeight:"700px"}} src={Img} alt=""/>
         </Box>
       </Box>
    </Box>
  )
}

export default Home