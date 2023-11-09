import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {cancelOrder, ordrStatus} from '../../../API/APIreq'
import Loader from "../../unitcomponents/Loader"
import { Button1, ProductCatContainer, ProductHeading, ProductImage } from '../../../../styles/Showcategories'
import { Box, Grid, Typography, styled } from '@mui/material'
import { Divider } from '../BuyProduct'
import OrdrTracker from './OrdrTracker'
import { Heading } from '../../../../styles/Signin&upStyles'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CancelIcon from '@mui/icons-material/Cancel';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { DatComp } from './DatComp'
import { CanclOptn } from './CanclOptn'
import Yetnoproduct from "../../Yetnoproduct"
import { Frame } from '../../showproductcomponentfunctionalities/Showcategories'

function OrderStatus() {
  
  const navigate=useNavigate()
  const params=useParams()
  const [loader,setLoader]=useState(false)
  const [data,setData]=useState()
  const [list,setList]=useState()
  const [cancel,setCancel]=useState(false)
  const [showall,setShowAll]=useState(true)
  const [cnclresn,setCnclresn]=useState(false)
  const [productid,setProductId]=useState()

  const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  useEffect(()=>{setLoader(true)},[])

  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem("user")))
    dtls()
    !showall&&getAll()
  },[cancel])

  const dtls=async ()=>{
    const dtl=await ordrStatus(params.id,1);
    setData(dtl);
    setLoader(false);
  }

  const rdrStatus=(stage)=>{
    return stage===1?"Registered successfully"
           :stage===2?"Dispatched"
           :stage===3?"Shipped"
           :stage===4?"Arrieved"
           :stage===5?"Delivered successfully"
           :stage===6?"CANCELED":""
  }
  const productDetails=(id)=>{
    navigate(`/products/products-details/${id}`)
   }
   
   const cancelOptns=async(idd)=>{
     setCancel(true)
     setCnclresn(true)
     setProductId(idd)
   }
   const cancelOrdr=async(id,detls)=>{
       setCnclresn(false)
       if(id){
           await cancelOrder(id,detls)
       }
      setCancel(false)
   }

   const getAll=async ()=>{
    const dtl=await ordrStatus(params.id,0);
    setData(dtl)
    setShowAll(false)
   }
  return (
     <Frame  sx={{marginTop:"0px"}}>
          <ProductHeading>
             MY ORDERS  
          </ProductHeading>
             {
               loader
                 ?<Box sx={{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <Loader />
                  </Box>
                 :cnclresn?<CanclOptn id={productid} cancelOrdr={cancelOrdr}/>
                 :data?.length
                    ?<>{
                      data.map((itm,index)=>{
                        return(
                            <ProductCatContainer key={index} sx={{minHeight:"400px",height:{md:"300px",xs:"700px"},marginBottom:"40px"}}>
                              <Grid container spacing={2} sx={{height:"100%"}}>
                                 
                                  <Grid item sm={3} xs={4} sx={{display:"flex",justifyContent:"center",alignItems:'center'}}>
                                      <Box sx={{padding:"10px"}}>
                                        <ProductImage  src={itm.productDetails[0].imgs[0].url} sx={{padding:"5px",maxHeight:"100px",backgroundColor:"#d1adcc"}}></ProductImage>
                                        <Button1 disabled={cancel}
                                                 sx={{color:"white",width:"100%"}} 
                                                 onClick={()=>{
                                                           itm.ordrStage===6||itm.ordrStage===5?navigate(`/products/products-buy/${itm.productDetails[0]._id}`)
                                                           :cancelOptns(itm._id)
                                                           }}
                                        >
                                              {itm.ordrStage===6||itm.ordrStage===5?"Buy again":"Cancel order"}
                                        </Button1>
                                      </Box>
                                  </Grid>
                                 
                                  <Grid item md={4} sm={2} xs={8} sx={{display:"flex",justifyContent:"center",alignItems:'center',padding:"10px"}}>
                                    <Box sx={{padding:"10px"}}>
                                      <Box sx={{border:"3px solid #d1adcc",display:{md:"block",sm:"none",xs:"block"}}}>
                                       <Heading sx={{fontSize:{xs:"24px"},width:"100%",backgroundColor:"#d1adcc",textAlign:"center"}}>
                                          About
                                       </Heading>
                                       <Typography sx={{padding:"5px",maxWidth:"90%",color:"#73566f",overflow:"auto",textAlign:"center",}}>
                                            Name:<i><b>{itm.productDetails[0].name}</b></i>, 
                                            Total items:<i><b>{itm.noOfItems}</b></i>,
                                            Order Status:<i><b>{ rdrStatus(itm.ordrStage)}</b></i> 
                                        </Typography>
                                      </Box>
                                      <Button1 sx={{marginTop:"5px",color:"white",width:"100%"}} onClick={()=>productDetails(itm.productDetails[0]._id)}>
                                         product details
                                      </Button1>
                                    </Box>
                                  </Grid>
                                
                                  <Grid item md={5} sm={7} xs={12} > 
                                      <Divider sx={{width:'90%',marginLeft:"7%",display:{xs:"block",sm:"none"}}}/>
                                      <Box sx={{height:"100%",marginTop:{xs:"15px",sm:0},maxWidth:"400px",width:"80%",marginLeft:"10%",padding:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        <OrdrTracker ordrStagee={itm.ordrStage}/>
                                      </Box>
                                  </Grid>
                                  
                                  <Divider sx={{width:'90%',marginLeft:"7%",marginTop:"10px"}}/>
                                  
                                  <Grid item md={6} xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Box>
                                        <Heading sx={{height:"100px",fontSize:{xs:"20px",backgroundColor:"#d1adcc",marginLeft:"10px",width:"80px",display:"flex",justifyContent:"center",alignItems:"center"}}}>
                                          Delivery address
                                        </Heading>
                                    </Box>
                                    <Box>
                                        {list?.address.map((adress,indeex)=>{
                                         return(
                                          <Fragment key={indeex+"s"}>
                                             {adress._id === itm.OrdrAdrsId?
                                              <Txt sx={{padding:"5px",maxWidth:"90%",color:"#73566f",overflow:"auto"}}>
                                                  {list.name}, {list.nmbr}, 
                                                  ({list.address[indeex].State}), 
                                                  {list.address[indeex].District}  ({list.address[indeex].pincode}), 
                                                  {list.address[indeex].City}, 
                                                  ({list.address[indeex].LandMark}) 
                                              </Txt>:""}
                                           </Fragment>
                                          )})
                                        }
                                    </Box> 
                                  </Grid>
                                 
                                  <Grid item md={6} xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                      <DatComp txt={"Order was made on"} upr={1} date={itm.OrdrDate} option={options} icon={<ShoppingBasketIcon sx={{color:"#73566f",fontSize:"40px"}}/>}/>
                                      <Divider sx={{width:"70%"}}/>
                                      {(itm.ordrStage!==6&&itm.ordrStage!==5)
                                           ?<DatComp txt={"Delivery expected by"} date={itm.expectedDeliveryDate} option={options} icon={<LocalShippingIcon sx={{color:"#73566f",fontSize:"40px"}}/>}/>
                                           :itm.ordrStage===6
                                           ?<DatComp txt={"Order has been canceled"} icon={<CancelIcon sx={{color:"#73566f",fontSize:"40px"}}/>}/>
                                           :<DatComp txt={"Product delivered successfully"} icon={<AddTaskIcon sx={{color:"#73566f",fontSize:"40px"}}/>}/>
                                       }
                                  </Grid>
                              </Grid>
                            </ProductCatContainer> 
                        )
                    }) }
                    
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>
                        {showall
                           ?<Button1 
                              sx={{color:"white",width:"300px",margin:"10px 0px 150px 0px"}} 
                              onClick={()=>getAll()}
                            >
                               Show All
                            </Button1>
                           :<Box sx={{margin:"0px 0px 150px 0px"}}></Box>
                          }
                       </Box>
                    
                  </>
               :<Box sx={{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Yetnoproduct message={"Your order list is empty. Waiting for your first order..."}/>
                </Box>
              }
     </Frame>
      )
}





const Txt=styled(Typography)(()=>({
                                  height:"100px",
                                  padding:"5px",
                                  display:"flex",
                                  alignItems:"center",
                                  border:"3px solid #d1adcc",
                                 }))


export default OrderStatus