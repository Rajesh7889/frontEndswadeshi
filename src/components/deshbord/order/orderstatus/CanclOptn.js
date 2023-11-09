import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material"
import { Heading } from "../../../../styles/Signin&upStyles"
import SlctCnclOptn from "./SlctCnclResn"
import CancelIcon from '@mui/icons-material/Cancel';
import { Button1 } from '../../../../styles/Showcategories'
import { Link } from "react-router-dom";
import { useState } from "react";


export  const CanclOptn=({cancelOrdr,id})=>{
    const [optn,setOptn]=useState(1)
    const [ordrCnclInfo,setOrdrcnclInfo]=useState({
                                                        reasonCode:"",
                                                        refundMode:1,
                                                        reason:""
                                                    })
    const reasonCode=(value)=>{
       setOrdrcnclInfo({...ordrCnclInfo,reasonCode:value})
    }
    const refndMode=(value)=>{
       setOrdrcnclInfo({...ordrCnclInfo,refundMode:value})
    }
    const reson=(value)=>{
       setOrdrcnclInfo({...ordrCnclInfo,reason:value})
    }

    return(
       <Box 
         sx={{position:"fixed",backgroundColor:'rgba(0, 0, 0, 0.651)',display:"flex",justifyContent:'center',alignItems:'center',top:0,zIndex:120,left:0,width:"100%",height:'100vh',overflow:"auto"}}
         onClick={()=>cancelOrdr()}
        >
            <Box 
              sx={{border:'3px solid #73566f',position:"relative",outline:'1px solid white',maxWidth:"1000px",width:{xs:'90%'},minHeight:'100px',backgroundColor:'#d1adcc',paddingBottom:"50px",margin:"300px 0px 100px 0px"}}
              onClick={(e)=>e.stopPropagation()}
            >
               <CancelIcon onClick={()=>cancelOrdr()} sx={{position:"absolute",top:-60,color:"white",fontSize:"40px",left:"50%",cursor:"pointer","&:hover":{color:'#d1adcc'}}}/>
               <Heading sx={{backgroundColor:'#73566f',color:'white',padding:"10px",fontWeight:700,fontSize:'25px'}}>
                  Comfirm Cancellation
               </Heading>
               <Grid container spacing={2}>
                    <Grid item lg={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                        <Box sx={{padding:"5px",width:"80%",marginTop:"50px"}}>
                           <SlctCnclOptn reasonCode={reasonCode} reson={reson} />
                        </Box> 
                    </Grid>
                    <Grid item lg={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                        <Box sx={{border:"3px solid #73566f",width:"80%",marginTop:"50px"}}>
                           
                           <Typography sx={{backgroundColor:'#73566f',padding:"5px",textAlign:"center",fontWeight:700,color:"white"}}>
                               REFUND MODES*
                           </Typography>
                           <FormControl disabled={ordrCnclInfo.reasonCode!==""?false:true}  sx={{padding:"10px",color:"#442c41"}}>
                               <FormLabel id="demo-radio-buttons-group-label">
                                   Select a Mode of Refund
                                </FormLabel>
                                <RadioGroup 
                                defaultValue={1}>
                                   <FormControlLabel 
                                     value={1} 
                                     control={<Radio />} 
                                     label='Original Payment Mode'
                                     onChange={()=>{setOptn(1);refndMode(1)}}
                                    />
                                    {optn===1&&ordrCnclInfo.reasonCode!==""&&
                                       <OrgPayMod ordrCnclInfo={ordrCnclInfo} cancelOrdr={cancelOrdr} id={id} msg1={'Refund will be processed within 8 days.'}/>
                                    }
                                   <FormControlLabel 
                                     value={2} 
                                     control={<Radio />} 
                                     label="No valid refund"
                                     onChange={()=>{setOptn(2);refndMode(2)}}
                                     
                                    /> 
                                     {optn!==1&&<OrgPayMod  ordrCnclInfo={ordrCnclInfo} id={id} msg1={'There will be no refund as the order is purchased using Cash-On-Delivery.'} cancelOrdr={cancelOrdr}/>}
                                </RadioGroup>
                           </FormControl>
                        </Box> 
                    </Grid>
                </Grid>
            </Box>
        </Box>
      )
  }

  const OrgPayMod=({msg1,cancelOrdr,id,ordrCnclInfo})=>{
    return(
      <>
        <Box sx={{marginLeft:"30px",}}>
            <Typography>
                  {msg1}
            </Typography>
            <Typography sx={{color:"#73566f",padding:"20px 0px 20px 0px"}} >
                   By clicking on "Request Cancellation", I agree to <Link to="/"><span style={{color:"rgb(5, 100, 129)"}}>Terms and Conditions</span></Link> of refunds.
            </Typography>
            <Button1 sx={{color:"white",backgroundColor:"#ee620b",padding:"10px",":hover":{color:"#ee620b"}}} onClick={()=>cancelOrdr(id,ordrCnclInfo)}>
                Request Cancellation
            </Button1>
        </Box>
     </>
    )
  }