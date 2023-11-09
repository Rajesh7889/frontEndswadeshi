import {useEffect, useState} from "react"
import {Typography,Grid,} from '@mui/material';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ErrorBox, ErrorTxt, Heading, MainBox, OuterBox, SubHeading, TxtfieldCstm } from "../../styles/Signin&upStyles";
import { useTheme } from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';
import { Button1 } from "../../styles/Showcategories";
import { gnratOTP, sendOTP } from "../API/APIreq";
import { agefxn, emailfxn, namefxn, nmbrfxn, pswdfxn } from "../API/validations";

export default function Signup() {
 

  const navigate=useNavigate()
  const theme=useTheme()
    const [age,setAge]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [nmbr,setNmbr]=useState("")
    const [password,setPass]=useState("")
    const [OTP,setOTP]=useState("")
    const [ageVal,setAgeVal]=useState(false)
    const [nameVal,setNameVal]=useState(false)
    const [emailVal,setEmailVal]=useState(false)
    const [nmbrVal,setNmbrVal]=useState(false)
    const [passwordVal,setPassVal]=useState(false)

    const [numberVerify,setNumberVerify]=useState(false)
    const [openverify,setOpenverify]=useState(false)
    
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

    const checkAll=()=>{
      if(nameVal ||  ageVal ||  nmbrVal ||  emailVal|| passwordVal || name==="" || age==="" || email==="" || password==="" ||  nmbr===""){
        return true
     }else{return false}
    }
    
    //email verification function...
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

//does email exists api call...
const varifyEmail=async(e)=>{
  e.preventDefault();
        try{
          const response= await axios.post(`checkemail/${email}`)
          if(response.data!==false){
            setErrMsg("Email already exists..  Please login or try with another email")
           }else if(response.status>499){
            setErrMsg("Server err... Please try again")
           }else if(response.data===false){
              try{ 
                setErrMsg("")
                sendEmail()
              }catch(err){setErrMsg("Server error...")}}
      }catch(err){setErrMsg("Site is not working...")}
}



  const otpvrifxn=(e)=>{
   
     setNumberVerify(e)
  }

    const signup=async()=>{
      if(OTP===parseInt(numberVerify)){
      let details={
        name,
        age,
        email,
        password,
        nmbr,
      }
    
          try{
            const response= await axios.post("registration",details)
           
            if(response.data=== false){
              setErrMsg("Email already exist..  Please login or try with another email")
             }else if(response.status>499){
              setErrMsg("Server err... Please try again")
             }else{
              setErrMsg("Registration successful")
              setTimeout(() => {
              navigate('/login')
             }, 1000);
             }
         }catch(err){setErrMsg("Site not working")}
        }else{
          setErrMsg("Invalid OTP")
        }
         
    }

    
  return (
  <>
    { !openverify?
       <OuterBox>
          <MainBox theme={theme}>
                  { errMsg!==""&&
                     <ErrorBox >
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt>{errMsg}</ErrorTxt>
                     </ErrorBox>
                  }
                 <Heading gutterBottom >Create Account</Heading>
                 <SubHeading gutterBottom>Fill-details:</SubHeading>
                 <Typography gutterBottom variant="body2" component="p" color="textSecondary">Fill up the form and be part of our community.</Typography>
         
              <Grid container spacing={1}>

                  <Grid item xs={12} sm={6}>
                     <TxtfieldCstm error={nameVal}  name="user_name" type="text" label="Name" placeholder="Enter your name.."   fxn={(e)=>namefxn(e,setName,setNameVal)} helperText={"Enter a valid name"}/>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <TxtfieldCstm error={ageVal} type="number" label="Age"  placeholder="Enter your age.."  fxn={(e)=>agefxn(e,setAge,setAgeVal)} helperText={"Invalid age"}/>
                  </Grid>

                  <Grid item xs={12}>
                     <TxtfieldCstm error={emailVal} name="user_email"  type="email" label="Email" placeholder="Enter email.." fxn={(e)=>emailfxn(e,setEmail,setEmailVal)} helperText={"Enter a valid email"}/>
                  </Grid>

                  <Grid item xs={12}>
                      <TxtfieldCstm error={passwordVal} type="password" label="Password" placeholder="Enter password.." fxn={(e)=>pswdfxn(e,setPass,setPassVal)} helperText={"Password is too short"}/>
                  </Grid>

                  <Grid item xs={12}>
                     <TxtfieldCstm error={nmbrVal} type="number" label="Mobile-number" placeholder="Enter mobile number.." fxn={(e)=>nmbrfxn(e,setNmbr,setNmbrVal)} helperText={"Enter a valid number"} />
                  </Grid>

                  <Grid item xs={12}>
                     <Typography sx={{padding:"20px 0",fontSize:"13px"}}>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</Typography>
                  </Grid>

                  <Grid item xs={12}>
                     <Button1 disabled={checkAll()} sx={{fontWeight:"600","&:hover":{color:"#352133"}}} type="submit" variant="contained"  onClick={varifyEmail} fullWidth>Continue</Button1>
                  </Grid>

                 <Grid item xs={12}>
                   <Typography sx={{borderTop:"1px solid lightGrey",marginTop:"30px",padding:"20px 0",fontSize:"13px"}}>Already have an account?
                      <Link style={{fontSize:"18px",textDecoration:"none",color:"#352133"}} to="/login">Sign in<ArrowRightIcon sx={{marginBottom:"-6px"}}/></Link>
                   </Typography>
                 </Grid>

             </Grid>
         </MainBox>
       </OuterBox>
      :
        <OuterBox>
        <MainBox theme={theme}>
                  { errMsg!==""&&
                     <ErrorBox >
                        <ErrorIcon sx={{color:"#352133"}}/> <ErrorTxt>{errMsg}</ErrorTxt>
                     </ErrorBox>
                  }
               <Heading gutterBottom>Email verification</Heading>
               <SubHeading gutterBottom>Enter OTP sent on your email provided:</SubHeading>
               <Typography gutterBottom variant="body2" component="p" color="textSecondary">Your validity leads to our better performance.</Typography>
      
              <Grid container >

                   <Grid item xs={12}>
                      <TxtfieldCstm type="number" label="OTP" placeholder="Enter OTP sent on your email" fxn={(e)=>otpvrifxn(e)}/>
                   </Grid>
            
                   <Grid item xs={12}>
                      <Typography sx={{padding:"20px 0px",fontSize:"13px"}}>To verify your email, we have sent you an email message with a temporary code. It will expire within {timer} seconds.</Typography>
                   </Grid>

                   <Grid item xs={12}>
                     <Button1 type="submit" variant="contained" sx={{fontWeight:600,"&:hover":{color:"#352133"}}} onClick={signup} fullWidth>Continue</Button1>
                   </Grid>
            
                 <Grid item xs={12}>
                    <Typography sx={{fontSize:"13px",color:"grey",padding:"20px 0",marginTop:"30px",borderTop:"1px solid lightGrey"}}>In case of any problem, you may contact  <Link style={{color:"#352133"}} to="/forgotpassword"> Customer Service </Link> for help restoring access to your account.</Typography>
                 </Grid>

             </Grid>
        </MainBox>
      </OuterBox>}

      </>
  );
}
