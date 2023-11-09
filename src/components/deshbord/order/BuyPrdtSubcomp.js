import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Button1 } from "../../../styles/Showcategories"
import { Fragment, useState } from "react"
import { Divider } from "./BuyProduct"

export function LogDfltComp({msg,email}){
    return(
      <>
         <Typography sx={{padding:"18px",fontSize:"15px"}}>{ msg ? msg :'Your order updates will be send on'} 
             <span style={{fontWeight:700,color:"#73566f",fontSize:"18px"}}> {email}</span> 
         </Typography>
      </>
    )
  }
  
  export const Ordrsmrydflt=({data})=>{
    return(
      <>
          <Typography sx={{padding:"18px",fontSize:"15px"}}>
             ({data} item{data>1 &&'s'})
          </Typography>
      </>
    )
  }
  
  export function AdrsDfltComp({list,ordradrs}){
      const [activeAddress,setActiveaddress]=useState(0)
    return(
      <>
         { list.address.map((itm,indx)=>{ 
              return(
              <Fragment key={indx}>
                 <Box  sx={{padding:"18px",fontSize:"15px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <Typography >
                             {list.name}, {list.nmbr}, ({itm.State}), {itm.District} ({itm.pincode}), {itm.City}, ({itm.LandMark})
                        </Typography>
                        <Button1 sx={{color:activeAddress===indx?"black":"white",padding:"5px",fontSize:"10px",backgroundColor:activeAddress===indx&&"darkorange"}} 
                               onClick={()=>{
                                             ordradrs(itm._id)
                                             setActiveaddress(indx)
                                            }}>
                                  {activeAddress===indx
                                              ?"Active Address"
                                              :"Deliver here"
                                   }
                         </Button1>
                 </Box>
                 <Divider/>
                </Fragment>)})
         }
      </>
    )
  }
  
  export function LogUpdtComp({logUpdt}){
    return(
      <> 
         <Typography sx={{padding:"18px",fontSize:"15px"}}>
               <Link to='/login'>If you want to make order from another account you can logout from here and login to other one</Link>
         </Typography>
         <Button1 sx={{color:'white',margin:"0px 0px 18px 18px"}} onClick={()=>logUpdt()}>Continue</Button1>
      </>
    )
  }


  export const Prictitl=({data})=>{
    return(
    <>
       Price ({data?.length} item{data?.length>1 &&'s'})
    </>)
   }