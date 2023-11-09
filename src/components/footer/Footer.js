import { Box, Button, Grid, Typography } from "@mui/material"
import React, { useState } from "react"
import {Logo} from '../../styles/NavStyles';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {TxtfieldCstm} from "../../styles/Signin&upStyles"
import SendIcon from '@mui/icons-material/Send';



export default function Footer(){
    const [query,setQuery]=useState("")
    let user=JSON.parse(localStorage.getItem("user"))
    const sendQuery=async()=>{
        if(query.length<20){
            console.log("please tell us your problem in more detail.")
        }else{
           
        }
    }
    return(
        <Box sx={{ backgroundColor:"#232F3E", color:'white',height:{sx:"400px",xs:"450px"}, width:'100%'}}>
           <Grid container>
            <Grid sm={6} xs={12} item sx={{display:"flex",height:{sm:"400px"},justifyContent:"center",alignItems:"center"}}>
                 <Box sx={{display:"flex",padding:"30px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <Logo sx={{top:0,left:0,fontSize:{sm:"35px",xs:"30px"},position:"relative",border:"1px solid white"}}>
                        Swadeshi
                    </Logo>
                    <Typography sx={{marginTop:"20px",fontSize:{sm:"30px"}}}>Contact us:</Typography>
                    <Box sx={{marginTop:"10px"}}>
                       <Typography sx={{display:"flex"}}>
                             <CallIcon/>+91-7889580892
                       </Typography>
                       <Typography sx={{display:"flex"}}>
                             <EmailIcon/>swadeshi@gamil.com
                        </Typography>
                        <Box sx={{marginTop:"30px",textAlign:"center"}}>
                            <FacebookIcon/>
                            <InstagramIcon/>
                            <TwitterIcon/>
                        </Box>
                    </Box>
                 </Box>
            </Grid>
            <Grid sm={6} xs={12} item sx={{display:"flex",height:{sm:"400px"},justifyContent:"center",alignItems:"center"}}>
                <Box sx={{display:"flex",padding:"30px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <Typography>
                        Have any query?
                    </Typography>
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                        <TxtfieldCstm color={"white"} fxn={(e)=>setQuery(e)}/>
                        <Button sx={{height:"60px"}} onClick={()=>sendQuery()} endIcon={<SendIcon/>}/>
                    </Box>
                    <Typography sx={{fontSize:"12px",marginBottom:"20px"}}>
                       {!user?"Please login and":""} write your query here. Our team will come with solution as soon as it will be possible.
                    </Typography>
                </Box>
            </Grid>
           </Grid>
        </Box>
    )
}
// import { Box, Button, Grid, Typography } from "@mui/material"
// import React, { useState } from "react"
// import {Logo} from '../../styles/NavStyles';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import {TxtfieldCstm} from "../../styles/Signin&upStyles"
// import SendIcon from '@mui/icons-material/Send';
// import { emit } from "process";


// export default function Footer(){
//     const [query,setQuery]=useState("")
//     let user=JSON.parse(localStorage.getItem("user"))
//     const sendQuery=async()=>{
//         // if(query.length<20){
//         //     console.log("please tell us your problem in more detail.")
//         // }
//     }

//     return(
//         <Box sx={{ backgroundColor:"#232F3E", color:'white',height:{sx:"400px",xs:"500px"}, width:'100%'}}>
//            <Grid container>
//             <Grid sm={6} xs={12} item sx={{display:"flex",height:{sm:"400px"},justifyContent:"center",alignItems:"center"}}>
//                  <Box sx={{display:"flex",padding:"30px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//                     <Logo sx={{top:0,left:0,fontSize:{sm:"35px",xs:"30px"},position:"relative",border:"1px solid white"}}>
//                         Swadeshi
//                     </Logo>
//                     <Typography sx={{marginTop:"20px",fontSize:{sm:"30px"}}}>Contact us:</Typography>
//                     <Box sx={{marginTop:"10px"}}>
//                        <Typography sx={{display:"flex"}}>
//                              <CallIcon/>+91-7889580892
//                        </Typography>
//                        <Typography sx={{display:"flex"}}>
//                              <EmailIcon/>swadeshi@gamil.com
//                         </Typography>
//                         <Box sx={{marginTop:"30px",textAlign:"center"}}>
//                             <FacebookIcon/>
//                             <InstagramIcon/>
//                             <TwitterIcon/>
//                         </Box>
//                     </Box>
//                  </Box>
//             </Grid>
//             <Grid sm={6} xs={12} item sx={{display:"flex",height:{sm:"400px"},justifyContent:"center",alignItems:"center"}}>
//                 <Box sx={{display:"flex",padding:"30px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//                     <Typography>
//                         Have any query?
//                     </Typography>
//                     <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
//                         <TxtfieldCstm color={"white"} fxn={(e)=>setQuery(e)}/>
//                         <Button sx={{height:"60px"}} endIcon={<SendIcon/>} onClick={()=>sendQuery()}/>
//                     </Box>
//                     <Typography>
//                          {!user?"Please login and":""} write your query here. Our team will come with solution as soon as it will be possible.
//                     </Typography>
//                 </Box>
//             </Grid>
//            </Grid>
//         </Box>
//     )
// }