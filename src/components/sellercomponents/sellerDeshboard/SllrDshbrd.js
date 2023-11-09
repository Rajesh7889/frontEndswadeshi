
import React, {useState } from 'react'
import { Box,} from '@mui/material'
import {Routes, Route, } from "react-router-dom";
import AddProducts from '../AddProducts';
import ProductItems from '../MyProductItems';
import UpdateItm from '../Update'
import Home from './Home';
import SlrHadr from "./SlrHadr"
const SllrDshbrd = () => {
    const [menubtn,setMenubnt]=useState(false)
  return (
    <Box sx={{width:"100%",minHeight:"100vh",position:"relative",backgroundColor:"rgb(229, 229, 229)"}} onClick={()=>setMenubnt(false)}>
      <SlrHadr menubtn={menubtn} setMenubnt={setMenubnt} />
        <Routes>
               <Route >
                <Route path="/" element={<Home/>}/>
                 <Route path="/add" element={<AddProducts/>}/>
                 <Route path="/myProducts" element={<ProductItems/>}/>
                 <Route path="/update/:id" element={<UpdateItm/>}/>
               </Route>
         </Routes>
   </Box>
  )
}

export default SllrDshbrd
