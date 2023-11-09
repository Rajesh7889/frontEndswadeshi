import React, {useState } from 'react'
import { styled } from "@mui/system";
import { Box, Button, Typography, useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import {useNavigate } from "react-router-dom";


const SlrHadr = ({menubtn,setMenubnt}) => {
    const navigate=useNavigate()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.up('sm'))

   
  return (<>
    <Typography sx={{backgroundColor:"rgb(139, 33, 33)",color:"white",fontSize:"12px",textAlign:"center",fontWeight:800}}>
    Seller Deshboard
</Typography>
   <Box sx={{padding:"5px",backgroundColor:"brown",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    {matches? 
         <>
             <Box>
                 <NavBTns theme={theme} onClick={()=>navigate("")}>Home</NavBTns>
             </Box>
             <Box>
                 <NavBTns theme={theme}>available products</NavBTns>
                 <NavBTns theme={theme} onClick={()=>navigate("myProducts")}>my products</NavBTns>
                 <NavBTns theme={theme}>Orders</NavBTns>
                 <NavBTns theme={theme}>Offers</NavBTns>
                 <NavBTns theme={theme}>summery</NavBTns>
             </Box>
         </>
         :<Box>
             <NavBTns onClick={(e)=>{e.stopPropagation();setMenubnt(true)}}>menu</NavBTns>
        </Box>
    }
   </Box>

  {  menubtn?
       <Box sx={{display:{sm:"none",xs:"block"}}}>
        <Box sx={{position:"absolute",display:"flex",flexDirection:"column"}}>
            <NavBTns onClick={()=>navigate('')}>Home</NavBTns>
            <NavBTns>available products</NavBTns>
            <NavBTns>my products</NavBTns>
            <NavBTns>Orders</NavBTns>
            <NavBTns>Offers</NavBTns>
            <NavBTns>summery</NavBTns>
        </Box>
     </Box>
     :""
  }</>
  )
}

export const NavBTns=styled(Button)(({theme})=>({
    color:"white",
    backgroundColor:"rgb(139, 33, 33)",
    border:"1px solid rgb(126, 33, 33)",
    fontSize:"12px",
    [theme.breakpoints.up('lg')]:{fontSize:"14px"}
}))
export default SlrHadr