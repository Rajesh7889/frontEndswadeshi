import { Box,ListItemButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";


export const Logo=styled(Box)(()=>({
    left:15,
    top:15,
    position:"fixed",
    fontFamily:"dancing script,sans-serif",
    border:"1px solid darkred",
    fontSize:20,
    padding:"5px 10px",
    borderRadius:"10px",
    backgroundColor:"darkred",
    ":hover":{border:"1px solid white",
              cursor:"pointer",
            }
}))


export const Sidebtnsframes=styled(Box)(()=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer",
    top:"57px",
    right:"25px",
    height:"40px",
    zIndex:12,padding:0,
    position:"absolute",
    borderRadius:"5px",
    border:"1px solid rgb(69, 52, 52)",
    backgroundColor:"rgb(34, 31, 31)",
}))

export const Sidebtns=styled(Box)(({theme,display})=>({
    height:"39px",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"5px",
    border:"1px solid rgb(69, 52, 52)",
    ":hover":{borderBottom:"1px solid white"},
    [theme.breakpoints.down('md')]:{display:display,
        right:"20px"
     },
}))

export const Header=styled(Box)(()=>({
    position:'fixed',
    width: '100%',
    height:"110px",
    top:0,
    backgroundColor:'#232F3E',
    color:'white',
    padding:'13px',
    fontWeight: 600,
    zIndex:"10"
}))

export const HeadNav=styled("ul")(()=>({
    listStyleType:'none',
    textDecoration: 'none', 
    display: 'flex',
    marginRight:"5px",
    justifyContent:"end",
    position:"relative",
    color:"white",
  }))

  export const Courses=styled(Box)(()=>({
    cursor:"pointer",
    position:"absolute",
    height:"35px",
    left:"100px",
    border:"1px solid rgb(69, 52, 52)",
    backgroundColor:"rgb(34, 31, 31)",
    borderRadius:"5px",
    ":hover":{borderBottom:"1px solid white"},
    padding:"3px 10px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'white',
}))  

export const HeadLink=styled(Link)(()=>({
    padding:"5px 10px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color:'white',
}))

export const Mobilefxns=styled(Box)(({theme})=>({
    width:"550px",
    top:"13px",
    right:"361px",
    [theme.breakpoints.down('lg')]:{width:"350px"},
    [theme.breakpoints.down('md')]:{
                 right:0,
                 top:"95vh",
                 bottom:0,
                 width:"100%"
                },
    color:"white",
    zIndex:12,
    position:"fixed",
    backgroundColor:"black"
}))

export const ListItembtn=styled(ListItemButton)(()=>({
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    padding:"3px",
}))


export const UserWlcm=styled(Box)(()=>({
    left:'180px',
    height:"50px",
    borderRadius:"5px",
    border:"1px solid rgb(69, 52, 52)",
    wordWrap:"break-word",
    overflow:"hidden",
    backgroundColor:"rgb(34, 31, 31)",
    paddingTop:5,
    width:"10%",
    top:54,
    position:"fixed",
    fontSize:"15px",
    zIndex:11,
    color:"white",
    display:"flex",
    justifyContent:"center",
    cursor:"pointer",
    ":hover":{boxShadow:"0px 0px 7px 0px white"}
}))
