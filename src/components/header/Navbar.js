import '../../App.css';
import React, { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Cookies from 'js-cookie';
import { Box,List, ListItem,Typography,useMediaQuery } from '@mui/material';
import {signinn,signout} from '../../features/Signstatus'
import { useDispatch} from 'react-redux'
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {Logo,HeadLink, HeadNav, Header, Mobilefxns, ListItembtn,UserWlcm, Courses,Sidebtns, Sidebtnsframes} from '../../styles/NavStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SellIcon from '@mui/icons-material/Sell';
import { chckSeller } from '../API/APIreq';

export default function Nav(){
    
   const dispatch = useDispatch()
   const navigate=useNavigate()
   const auth=JSON.parse(localStorage.getItem("user"))
   const seller=JSON.parse(localStorage.getItem("seller"))
   const [sellerToggle,setSelertToggle]=useState(false)
   useEffect(()=>{auth && dispatch(signinn())},[])
  

   //media query...
   const theme=useTheme();
   const matches= useMediaQuery(theme.breakpoints.up('md'));
   const matches1= useMediaQuery(theme.breakpoints.up('lg'));
   const matches2= useMediaQuery(theme.breakpoints.down('sm'));
   const matches3= useMediaQuery(theme.breakpoints.up('xl'));
   const logout=()=>{console.log("logout")
    dispatch(signout())
    Cookies.remove("auth")
    localStorage.clear()
    navigate("/")
}

 const sllrnvgtion=async()=>{
       if(seller){
         navigate("/sellerDeshboard")
       }else{
          let response=await chckSeller(auth._id)
          if(response){
               navigate("/sellerDeshboard")
          }else{
               navigate("/sellerpage")
        }}
 }

   const navoptions=[
           auth &&        {path:`/orderstatus/${auth?._id}`, text:"Order-Lookup"},
           auth===null && {path:"/login",                    title:"login",     icon:<LoginIcon/>,         text:!matches2&&"Login"},
           auth===null && {path:"/signup",                   title:"signup",    icon:<TheaterComedyIcon/>, text:!matches2&&"Signup"},
           auth &&        {path:"/",                         title:"Logout",    icon:<LogoutIcon/>,        text:matches?"logout":""},
           auth &&        {path:"/myprofile",                title:"Myprofile", icon:<AccountBoxIcon/>,    text:matches?"My-profile":""},
         ]  
        
   const functionalities=[
                          {path:auth?"/favoritelist":'/login', icon:<FavoriteIcon sx={{fontSize:"30px",marginRight:"5px"}}/>,        text:matches1&&"Favorite"},
                          {path:"/notifications",              icon:<NotificationAddIcon sx={{fontSize:"30px",marginRight:"5px"}}/>, text:matches1&&"Notifications"},
                          {path:auth?"/card":'/login',         icon:<ShoppingCartIcon sx={{fontSize:"30px",marginRight:"5px"}}/>,    text:matches1&&"Card"},
                          {path:"/help",                       icon:<HelpIcon sx={{fontSize:"30px",marginRight:"5px"}}/>,            text:matches1&&"Help"},
   ]     

    return(
     <>
       <Header onClick={()=>{sellerToggle&&setSelertToggle(false);}}>
         <HeadNav theme={theme} >

             {/* logo */}
            <li> 
               <HeadLink sx={{":hover":{border:"none"}}} to="/">
                     <Logo>Swadeshi</Logo>
               </HeadLink>
            </li>

            {/* handcrafting link */}
            {matches3&&
             <li>
                <Courses onClick={()=>navigate("/get-videoCourses")}>Learn or teach Handcrafting (at minimum prices)..</Courses>
             </li>
            }

            {/* top navigation buttons */}
            <HeadNav sx={{border:"1px solid rgb(69, 52, 52)",backgroundColor:"rgb(34, 31, 31)",borderRadius:"5px",}}>
              {navoptions.map((itm,index)=>{
                return( 
                  <li key={index}>
                        {itm &&
                              <HeadLink to={itm.path} sx={{border:"1px solid rgb(69, 52, 52)",borderRadius:"5px",height:"35px",":hover":{borderBottom:"1px solid white"}}} title={itm &&itm.title } onClick={()=>itm.title==="Logout"&&logout()}>
                                {itm.icon}{itm.text}
                              </HeadLink>
                          }
                  </li>
               )})}
             </HeadNav>
         </HeadNav>
       </Header>

       {/* responsive navigations */}
       <Mobilefxns theme={theme}>
         <Box sx={{border:"1px solid rgb(69, 52, 52)",backgroundColor:"rgb(34, 31, 31)",borderRadius:"5px"}}>
            <List sx={{display:"flex",padding:0}}>
                {functionalities.map((itm,index)=>{
                    return(
                 <ListItem key={index} sx={{border:"1px solid rgb(69, 52, 52)",borderRadius:"5px",height:"35px",":hover":{borderBottom:"1px solid white"}}}>
                    <ListItembtn onClick={()=>{navigate(itm.path);setSelertToggle(false)}}>
                        {itm.icon}{matches&&itm.text}
                    </ListItembtn>
                </ListItem>)})}
            </List>
         </Box>
       </Mobilefxns>
       <Sidebtnsframes>
         {/* seller corner links */}
        { auth?<Sidebtns theme={theme} display={"block"} sx={{right:"128px"}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>sllrnvgtion()}>
                <SellIcon/>SELL
            </Box>
         </Sidebtns>:""}
 
         {/* About us link */}
         <Sidebtns theme={theme} display={"none"}>
                <InfoIcon/>About-Us
         </Sidebtns> 
       </Sidebtnsframes>
  
      {/* welcome message */}
      {
       matches1 &&
          <UserWlcm onClick={()=>navigate("/myprofile")}>
             <FaceRetouchingNaturalIcon/>
             <Typography sx={{fontSize:"12px",marginTop:auth?'-5px':"10px",paddingLeft:"5px",textAlign:"center"}}>
                {auth
                   ?<>Hi <span style={{fontSize:"20px"}}>{auth.name.slice(0,7)}!..</span> Welcome to swadeshi bazaar</>
                   :<>Login for better experience..</>}
             </Typography>
          </UserWlcm>
       } 
   </>
   )
}
