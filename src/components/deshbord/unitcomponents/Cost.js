import { Typography } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Cost({price,discount}) {
  return (
    <>
      {price&&
      <Typography>
            <b style={{color:"darkGreen",fontSize:"20px"}}><CurrencyRupeeIcon sx={{fontSize:"13px"}}/>{price-discount*price/100 } </b>
            <span style={{color:"grey"}}>M.R.P</span> 
            <i style={{textDecorationLine:"line-through",textDecorationColor:"darkred",textDecorationThickness:"3px"}}>{Math.round(price)}</i>
            <b style={{marginLeft:"20px"}}>({discount}% off )</b>
      </Typography>}
    </>
  )
}

export default Cost