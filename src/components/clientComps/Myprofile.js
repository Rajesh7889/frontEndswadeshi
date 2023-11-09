import React, { useEffect,useState } from 'react'
import { Avatar, Box,FormControl,MenuItem, Select, TextField, Typography } from '@mui/material'
import { ErrorBox, ErrorTxt, Heading, customTheme } from '../../styles/Signin&upStyles'
import { deepOrange} from '@mui/material/colors';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from '../deshbord/order/orderstatus/SlctCnclResn';
import {Button1} from '../../styles/Showcategories'
import { chckActvAdrs, deleteAddress, updateDetails } from '../API/APIreq';
import ErrorIcon from '@mui/icons-material/Error';
import { Frame } from '../deshbord/showproductcomponentfunctionalities/Showcategories';

const Myprofile = () => {

        const classes=useStyles()
        
        let saveddata=JSON.parse(localStorage.getItem("user"))

        const[adrs,setAdrs]=useState(1)
        const[edtfield,setEdtfield]=useState(null)
        const[edtfieldAdrs,setEdtfieldAdrs]=useState(null)
        const[opnedtadrs,setOpnedtadrs]=useState(false)
        const[changed,setChanged]=useState(false)
        const[updtMsg,setUpdtMsg]=useState(null)
        const[timeIntrval,setTimeinterval]=useState(null)
        const[save,setSaved]=useState(false)
        const[newAdrs,setNewAdrs]=useState(0)

        const[address,setAddress]=useState({
                                            city:"",
                                            country:"",
                                            distt:"",
                                            Houseno:"",
                                            LandMark:"",
                                            State:"",
                                            pincode:"",
                                            adrsId:""
                                         })

        const[data,setData]=useState({
                            name:'',
                            email:'',
                            nmbr:''
                       })
  
          useEffect(()=>{
            setAddress({
                        city:saveddata.address.length?saveddata.address[adrs-1]?.City:"",
                        country:saveddata.address.length?saveddata.address[adrs-1]?.Country:"",
                        distt:saveddata.address.length?saveddata.address[adrs-1]?.District:"",
                        Houseno:saveddata.address.length?saveddata.address[adrs-1]?.HouseNmbr:"",
                        LandMark:saveddata.address.length?saveddata.address[adrs-1]?.LandMark:"",
                        State:saveddata.address.length?saveddata.address[adrs-1]?.State:"",
                        pincode:saveddata.address.length?saveddata.address[adrs-1]?.pincode:"",
                        adrsId:saveddata.address.length?saveddata.address[adrs-1]?._id:"",
          })},[adrs,opnedtadrs])

          useEffect(()=>{
            clearTimeout(timeIntrval)
            setTimeinterval(setTimeout(()=>{
                  setUpdtMsg("")
            },7000))

            return () => {
              clearTimeout(timeIntrval);
            };
          },[updtMsg])

         useEffect(()=>{
              setData({
                name:saveddata.name,
                email:saveddata.email,
                nmbr:saveddata.nmbr,
                age:saveddata.age
           })},[])
  
          const myDetails=[
                     {label:"Name",          defaultValue:data?.name?`${data?.name}`:"",  type:"text",  value:"",action:"name"},
                     {label:"Mobile number", defaultValue:data?.nmbr?`${data?.nmbr}`:"",  type:"number",value:"",action:"nmbr"},
                     {label:"Age",           defaultValue:data?.age?`${data?.age}`:"",   type:"number",value:"",action:"age"},
                     {label:"Email address", defaultValue:data?.email?`${data?.email}`:"",type:"text",  value:"",action:"email"},
                    ]
          const myAddress=[
                     {label:"City",        defaultValue:address?.city?`${address?.city}`:"",    type:"text",  value:"",action:"city"},
                     {label:"Country",     defaultValue:`${address?.country}`, type:"text",  value:"",action:"country"},
                     {label:"District",    defaultValue:`${address?.distt}`,   type:"text",  value:"",action:"distt"},
                     {label:"House Number",defaultValue:`${address?.Houseno}`, type:"text",  value:"",action:"Houseno"},
                     {label:"LandMark",    defaultValue:`${address?.LandMark}`,type:"text",  value:"",action:"LandMark"},
                     {label:"State",       defaultValue:`${address?.State}`,   type:"text",  value:"",action:"State"},
                     {label:"PIN-CODE",    defaultValue:`${address?.pincode}`, type:"number",value:"",action:"pincode"},
                  ]

          const editField=(index)=>{
            setEdtfield(index)
            }     
            
          const edtFieldAdrs=(index)=>{
            setEdtfieldAdrs(index)
          }
          const setAddrs=(e)=>{
            setAdrs(e.target.value)
          }

          const chngDtls=(e,field)=>{
            setChanged(true)
            setData({...data,[field]:e.target.value})
          }
          const chngAddrs=(e,field)=>{
            setChanged(true)
            setAddress({...address,[field]:e.target.value})
          }

          const openEditAddress=async()=>{
             let a = await chckActvAdrs(address.adrsId);
             if(a===1){
              setOpnedtadrs(true)
            }else{
              setUpdtMsg("SORRY, there is an active order on this address, can't edit it..")
            }
          }

          const deleteAdrs=async()=>{
            let a=await deleteAddress(saveddata._id,address.adrsId);
               setOpnedtadrs(false)
              if(a===1){
                setUpdtMsg("address deleted successfully")
              }else if(a===2){
                setUpdtMsg("there is an order registered on this order, can't delete it")
              }else{
                setUpdtMsg("some thing went wrong , can't delete address")
              }
          }

          const saveChanges=async()=>{
            if(data.name.trim().length===0){
              setUpdtMsg("please enter a valid name")
              return
            }else if(data.nmbr<999999999||data.nmbr>9999999999){
              setUpdtMsg("Please enter valid mobile number")
              return
            }else if(data.age<1||data.age>150){
              setUpdtMsg("Please enter a valid age")
              return
            }

           let updatedDetals={address:{id:address.adrsId}}

           if( saveddata.name!==data.name)
               {updatedDetals.name=data.name}

           if(saveddata.nmbr!==data.nmbr)
               {updatedDetals.nmbr=data.nmbr}

           if(saveddata.age!==data.age)
               {updatedDetals.age=data.age}

           if(saveddata.address[adrs-1]?.City!==address.city&&address.city!=="")
                {updatedDetals.address.City=address.city}

           if(saveddata.address[adrs-1]?.Country!==address.country&&address.country!=="")
                {updatedDetals.address.Country=address.country}

           if(saveddata.address[adrs-1]?.District!==address.distt&&address.distt!=="")
                {updatedDetals.address.District=address.distt}

           if(saveddata.address[adrs-1]?.HouseNmbr!==address.Houseno&&address.Houseno!=="")
                {updatedDetals.address.HouseNmbr=address.Houseno}

           if(saveddata.address[adrs-1]?.LandMark!==address.LandMark&&address.LandMark!=="")
                {updatedDetals.address.LandMark=address.LandMark}

           if(saveddata.address[adrs-1]?.State!==address.State&&address.State!=="")
                {updatedDetals.address.State=address.State}

           if(saveddata.address[adrs-1]?.pincode!==address.pincode&&address.pincode!=="")
                {updatedDetals.address.pincode=address.pincode}

           if(updatedDetals.name||updatedDetals.age||updatedDetals.nmbr||updatedDetals.address.District
             ||updatedDetals.address.City||updatedDetals.address.Country||updatedDetals.address.pincode
             ||updatedDetals.address.State||updatedDetals.address.LandMark||updatedDetals.address.HouseNmbr)
             {
                   let a=await updateDetails(saveddata._id,updatedDetals);
                    if(a===1){
                      setChanged(false)
                      setOpnedtadrs(false)
                      setUpdtMsg("Your profiled updated successfully")
                    }else{
                      setChanged(false)
                      setOpnedtadrs(false)
                      setUpdtMsg("some thing went wrong , can't update profile")
                    }
              
             }else{
              setUpdtMsg("Your profiled updated successfully")
             }   
          }
  
  return (
    <Frame sx={{display:"flex",justifyContent:'center',backgroundColor:'rgba(0, 0, 0, 0.651)',padding:"0px 0px 50px 0px"}}>
         <Box sx={{width:{lg:"1000px",md:"600px",xs:"90%"},marginTop:"50px"}}>
               { updtMsg&&
                     <ErrorBox sx={{outline:"1px solid white",backgroundColor:"#d1adcc"}}>
                        <ErrorIcon sx={{}}/> <ErrorTxt>{updtMsg}</ErrorTxt>
                     </ErrorBox>
                }
              <Box sx={{display:"flex",alignItems:"center",padding:"0px 0px 1px 5px"}}>
                 <Avatar sx={{ width: 100, height: 100 , bgcolor: deepOrange[500],border:'3px solid #73566f',outline:'1px solid white' }}>
                     <span style={{fontWeight:700,fontSize:"30px"}}>
                         {saveddata?.name?.slice(0,1)}
                     </span>
                  </Avatar>
                  <Heading sx={{marginTop:"10px",color:"white", padding :"10px"}}>hii 
                     <span style={{fontSize:{xs:"40px"},color:deepOrange[500]}}>
                        &nbsp;&nbsp;{saveddata?.name}
                      </span>,
                      &nbsp; welcome to Swadeshi bazaar
                  </Heading>
              </Box>
         
              <Box sx={{padding:{lg:"50px",md:"30px",xs:"10px"},border:'3px solid #73566f',outline:'1px solid white',width:"100%",minHeight:'100px',backgroundColor:'#d1adcc'}}>
                 {myDetails.map((itm,index)=>{
                        return(<DisplayFields index={index} key={index} fieldObj={data} edtfield={edtfield} editField={editField} chngDtls={chngDtls} itm={itm}/>)
                      }) 
                  }
                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>     
                       <Typography sx={{color:"#73566f"}}>
                          Address
                        </Typography>
                        {saveddata.address.length?
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120,width:"90%" }}>
                           <Select className={classes.select} value={adrs} onChange={setAddrs} label="Age" sx={{width:"40px",color:'white',paddingLeft:"5px"}}>
                             {saveddata.address.map((item,index)=>{
                                return(<MenuItem key={`${index}s`} value={index+1}  sx={{paddingLeft:"5px",backgroundColor:"#73566f",color:index!==adrs-1?"white":"#73566f","&:hover":{color:"#73566f"}}}>
                                           {address.city?(index+1):"Add"}
                                       </MenuItem> )
                                 })
                              }
                           </Select>
                        </FormControl>:""}

                        {!opnedtadrs&&
                          <Button1 
                              sx={{width:"200px",color:"white",":hover":{backgroundColor:deepOrange[500]}}} 
                              onClick={()=>{openEditAddress()}}
                           >
                              {address.city!==""?"Edit address":"add address"}
                          </Button1>
                         }
                         {opnedtadrs&&saveddata.address[0]?.City&&
                           <Button1 sx={{width:"150px",color:"white",":hover":{backgroundColor:deepOrange[500]}}} onClick={()=>deleteAdrs()}>
                               Delete
                           </Button1>
                          }
                   </Box>
             
                   {opnedtadrs&&myAddress.map((itm,index)=>{
                         return(<DisplayFields index={index} key={index} edtfield={edtfieldAdrs} editField={edtFieldAdrs} chngDtls={chngAddrs} itm={itm}/>)
                       })
                    }
                    {changed&&
                      <Box sx={{width:"100%",display:"flex",justifyContent:"end",marginTop:"50px"}}>
                         <Button1 sx={{width:"100%",color:"white",":hover":{backgroundColor:deepOrange[500]}}} onClick={()=>{saveChanges()}} >
                           save Changes
                         </Button1>
                      </Box>}
               </Box>
         </Box>
     </Frame>
   )
}


const DisplayFields=({index,itm,chngDtls,editField,edtfield})=>{
  const theme=useTheme();
  return(
  <ThemeProvider theme={customTheme(theme)}>
    <TextField 
       autoFocus={true}
       key={index}
       autoComplete='none' 
       type={itm.type}
       onChange={(e)=>chngDtls(e,itm.action)}  
       value={itm.defaultValue}
       label={itm.label} 
       variant="filled" 
       placeholder={""}
       fullWidth 
       InputProps={{readOnly:index===edtfield?false:true,
                    endAdornment: (
                      itm.action!=="email"?<EditIcon sx={{cursor:"pointer",background:"white",borderRadius:"50%",padding:"4px",color:"#73566f",":hover":{color:deepOrange[500]}}} onClick={()=>editField(index)}/>:""
                      ),
                   }}
       required 
       sx={{ input: {color:index===edtfield&&"darkred"} }}
     />
  </ThemeProvider>
 )
}

export default Myprofile