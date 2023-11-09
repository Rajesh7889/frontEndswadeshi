import { Box,Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Logo} from '../../styles/NavStyles';
import { TxtfieldCstm } from '../../styles/Signin&upStyles';
import { Button1 } from '../../styles/Showcategories';
import {chckEmailSeller, gnratOTP, rgstrSllr, sendOTP } from '../API/APIreq';
import { displayNamefxn, emailfxn, gstinfxn, namefxn, nmbrfxn, panfxn, pinfxn, pswdfxn, storeDisfxn } from '../API/validations';

const Sellerreglogin = () => {
    const _id=JSON.parse(localStorage.getItem("user"))._id
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [nmbr,setNmbr]=useState("")
    const [password,setPass]=useState("")
    const [OTP,setOTP]=useState("")
    const [pincode,setPinCode]=useState(0)
    const [dsplynam,setDsplynam]=useState("")
    const [strDscrptn,setStrDscrptn]=useState("")
    const [PAN,setPAN]=useState("")
    const [GSTIN,setGSTIN]=useState("")

    const [strDscrptnval,setStrDscrptnval]=useState("")
    const [nameVal,setNameVal]=useState(false)
    const [dsplynamVal,setDsplynamval]=useState(false)
    const [emailVal,setEmailVal]=useState(false)
    const [nmbrVal,setNmbrVal]=useState(false)
    const [passwordVal,setPassVal]=useState(false)
    const [pincodeVal,setPinCodeVal]=useState(false)
    const [PANval,setPANval]=useState(false)
    const [GSTINval,setGSTval]=useState(false)

    const [numberVerify,setNumberVerify]=useState(false)
    const [openverify,setOpenverify]=useState(false)
    const [emailVerified,setEmailVerified]=useState(false)
    
    const [errMsg,setErrMsg]=useState("")
    
    const [ timer, setTimer]=useState(120)

    //generating otp for email verification..
    useEffect(()=>{
      if(openverify){
        const interval= setInterval(() => {
          setTimer(pre=>pre-1)
        }, 1000);
        return ()=>{
          clearInterval(interval)
      }
      }
    },[openverify])

    useEffect(()=>{
       setOTP(gnratOTP())
    },[])
    
    const otpbutton=()=>{
      if(!email||emailVal){return true
      }else{
        return false
      }
    }

    
    const checkAll=()=>{
      if(strDscrptnval||PANval||GSTINval||dsplynamVal||pincodeVal||nameVal ||nmbrVal  || emailVal|| passwordVal||PAN==="" ||GSTIN===""|| strDscrptn===""||OTP==="" ||dsplynam==="" || pincode==="" || name==="" ||email==="" || password==="" ||  nmbr===""){
        return true
     }else{return false}
    }


    //verifing if email already registered..
    const verifyEmail=async()=>{
      let response=await chckEmailSeller(email)
      if(!response){
        sendEmail()
      }else{
        alert("Email already registered, please try with another.")
      }
    }


    // sending OTP on entered email...
    const sendEmail = () => {
       try{
        setOpenverify(true)
        setTimeout(() => {
        setOpenverify(false)
        setOTP("")
      },120000);
      sendOTP(OTP,email);
    }catch(err){console.log(err)}
    };

    //verifing entered OTP.
    const verifyOTP=()=>{
       if(Number(numberVerify)===OTP){
        setEmailVerified(true)
        setOpenverify(false)
       }else{
        alert("OTP is invalid")
       }
    }

    //regestration of seller..
    const regestration=async()=>{
           if(!emailVerified){
              alert("email verification is required berfore registration of a seller")
           }else{
             const details={
                    _id,
                    name,
                    email,
                    nmbr,
                    password,
                    pincode,
                    dsplynam,
                    strDscrptn,
                    PAN,
                    GSTIN,
                   }
            let response=await rgstrSllr(details)
           }
    }
  return (
    <Box sx={{width:"100%",minHeight:"100vh",backgroundColor:"rgb(229, 229, 229)"}}>
        <Typography sx={{color:"#73566f",fontWeight:700,textAlign:"center",fontSize:"20px",marginTop:"20px",padding:"10px",backgroundColor:"#fff"}}>
            Create  a Seller Account
        </Typography>
         <Grid container>
              <Grid item lg={6} xs={12}>
                  <Box sx={{margin:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}>
                      <Typography sx={{padding:"10px 10%",fontWeight:700,textAlign:"center",color:"rgb(66, 66, 66)"}}>
                         Welcome, you are going to start a long JOURNEY with us. Hope you will enjoy and successfully achieve your goals.
                      </Typography>
                      <Logo sx={{boxShadow:"0px 0px 10px 0px black",top:0,left:0,color:"white",border:"4px solid white",":hover":{border:"4px solid white"},fontSize:{sm:"35px",xs:"30px"},position:"relative"}}>
                        Swadeshi
                      </Logo>
                  </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                 <Box sx={{margin:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}>
                    <Box sx={{boxShadow:"0px 0px 10px 1px black",marginBottom:"40px",height:"800px",padding:"10px",position:"relative",width:"80%",backgroundColor:"white",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                         <Typography sx={{fontWeight:700,fontSize:"20px",borderBottom:"2px solid black"}}>
                            Registration form.
                         </Typography>
                         <Box sx={{marginTop:"20px"}}>
                              
                              <Box sx={{display:"flex",justifyContent:'center',alignItems:"top"}}> 
                                 <TxtfieldCstm error={emailVal} type="email" label="Email" placeholder="Enter email.." fxn={(e)=>emailfxn(e,setEmail,setEmailVal)} helperText={"Enter valide email"}/>
                                  <Button1 disabled={otpbutton()} onClick={()=>verifyEmail()} sx={{color:"white",height:"55px",marginLeft:"5px",fontSize:"12px",width:"70px"}}>
                                    send OTP
                                  </Button1>
                              </Box>

                             {openverify
                                ?<Box sx={{display:"flex",justifyContent:'center',alignItems:"top"}}>
                                     <Box sx={{maxWidthidth:"300px",borderRadius:"5px",border:"1px solid black",margin:"3px",width:"100%"}}>
                                         <TxtfieldCstm error={false} type="number" label="OPT" placeholder="Enter OTP" fxn={(e)=>setNumberVerify(e)} helperText={"OTP doesn't match"} />
                                         <Typography sx={{padding:"5px",fontSize:"12px",fontWeight:700,color:"grey"}}>
                                            Enter the OTP sent on your email. It is valid for {timer} seconds..
                                         </Typography>
                                     </Box>
                                     <Button1 onClick={()=>verifyOTP()} sx={{color:"white",marginLeft:"5px",fontSize:"12px",height:"100"}}>
                                       Verify
                                     </Button1>
                                 </Box>
                                 :""
                              }

                             <TxtfieldCstm error={nmbrVal} type="number" label="Mobile-number" placeholder="Enter mobile number.." fxn={(e)=>nmbrfxn(e,setNmbr,setNmbrVal)} helperText={"Enter a valid number"} />
                             <TxtfieldCstm error={pincodeVal} type="number" label="Pickup pin-code" placeholder="Enter Pickup Pincode.." fxn={(e)=>pinfxn(e,setPinCode,setPinCodeVal)} helperText={"Enter a valid pin-code"} />
                             <TxtfieldCstm error={passwordVal} type="text" label="Password" placeholder="Enter password.." fxn={(e)=>pswdfxn(e,setPass,setPassVal)} helperText={"Enter a strong password"}/>
                             <TxtfieldCstm error={nameVal} type="text" label="Full name" placeholder="Enter your Full name.." fxn={(e)=>namefxn(e,setName,setNameVal)} helperText={"Enter a valid Full name"}/>
                             <TxtfieldCstm error={dsplynamVal} type="text" label="Display name" placeholder="Enter Display name.." fxn={(e)=>displayNamefxn(e,setDsplynam,setDsplynamval)} helperText={"Enter a valid Display name"}/>
                             <TxtfieldCstm error={strDscrptnval} type="text" label="Store Description" placeholder="Enter Store Description.." fxn={(e)=>storeDisfxn(e,setStrDscrptn,setStrDscrptnval)} helperText={"Enter a detail Description"}/>
                             <TxtfieldCstm error={PANval} type="text" label="PAN number" placeholder="Enter PAN number.." fxn={(e)=>panfxn(e,setPAN,setPANval)} helperText={"Enter a valide PAN number"}/>
                             <TxtfieldCstm error={GSTINval} type="text" label="Enter GSTIN" placeholder="Enter GSTIN.." fxn={(e)=>gstinfxn(e,setGSTIN,setGSTval)} helperText={"Enter a valide GSTIN"}/>
                             <Typography sx={{fontWeight:700,fontSize:"13px",color:"rgb(99, 97, 97)"}}>
                                  GSTIN is required to sell products on Swadeshi Bazaar.
                             </Typography>
                             <Box sx={{width:"100%",display:"flex",justifyContent:"end",alignItems:"center",marginTop:"30px"}}>
                               <Button1 disabled={checkAll()} onClick={()=>regestration()} sx={{color:"white",padding:"10px"}}>
                                  Register & Continue
                               </Button1>
                             </Box>
                         </Box>
                     </Box>
                 </Box>
              </Grid>
         </Grid>
    </Box>
  )
}

export default Sellerreglogin