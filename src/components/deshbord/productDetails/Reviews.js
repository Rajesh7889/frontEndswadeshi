import { useState } from "react"
import { addreview } from "../../API/APIreq"
import { Box, Grid, Rating, Typography } from "@mui/material"
import { ThisProductBox, ThisProductCont } from "../showproductcomponentfunctionalities/Allsubcatproducts"
import { Button1, ProductHeading } from "../../../styles/Showcategories"
import { Divider } from "../order/BuyProduct"
import { TxtfieldCstm } from "../../../styles/Signin&upStyles"

export default function Reviews({product_id,reviews,updt}){
    let user=JSON.parse(localStorage.getItem("user"))
    const [details,setDetails]=useState({
                                     user:user?._id,
                                     name:user?.name,
                                     rating:"",
                                     comment:"",
                                        })
    const setRatndCmnt=(field,value)=>{
            setDetails({...details,[field]:value})
    }
    const saveReview=async()=>{
         reviews?.map(itm=>{
           if(itm.user===user?._id){
              details._id=itm?._id
           }
           return 0
         })
         await addreview(product_id,details)
         updt()
  }
    return(
       <Grid container sx={{marginTop:"-10px"}}> 
            <ThisProductCont xs={12} sx={{marginBottom:"50px"}} item>
                <ThisProductBox sx={{width:"100%",padding:"4px"}}>
                          <ProductHeading sx={{textAlign:"center",marginBottom:"10px"}}>
                             Product reviews...
                          </ProductHeading>
                          
                          {reviews?.length
                           ?reviews?.map((itm,indx)=>{
                             return(
                                   <Box key={indx} sx={{padding:"10px",border:"1px solid #d1adcc",}}>
                                      <Box sx={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                                         <Typography sx={{marginRight:"5px",fontWeight:700,color:"#73566f"}}>
                                            {itm?.name}
                                         </Typography>
                                         <Rating value={itm.rating} readOnly />
                                      </Box>
                                      <Box>
                                         <Divider sx={{width:"80%",margin:"20px 0px 0px 10%"}}/>
                                         <Typography sx={{textAlign:"center",padding:"5px",color:"rgba(84, 83, 83, 0.851)"}}>
                                            {itm.comment}
                                         </Typography>
                                   </Box>
                                   </Box>
                               )
                            })
                            :<Box sx={{padding:"10px",border:"1px solid #d1adcc",}}>
                               <Box sx={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                                 <Typography sx={{marginRight:"5px",fontWeight:700,color:"#73566f"}}>
                                    Yet no review... Be first to add a review.
                                 </Typography>
                               </Box>
                             </Box>
                          }
  
                          <Box sx={{padding:"10px",border:"1px solid #d1adcc", marginTop:"4px"}}>
                               <ProductHeading sx={{display:"flex",justifyContent:"space-between",padding:"3px",marginBottom:"5px"}}>
                                  <ProductHeading sx={{height:"20px"}}>
                                      Add your review
                                  </ProductHeading>
                                  <Button1 disabled={details.rating&&user?.name?false:true} sx={{color:"white",width:"170px",fontSize:"13px",border:"1px solid #73566f"}} onClick={()=>saveReview()}>
                                     Save review
                                  </Button1>
                               </ProductHeading>
                               <Typography sx={{marginRight:"5px",textAlign:'center',color:"rgba(84, 83, 83, 0.851)"}}>
                                    Hii, <i style={{fontWeight:700,color:"#73566f"}}>{user?.name?user?.name:"Login and"}</i>..<br/>
                                    please share your experience of our service and product.
                                    let us help other consumers to know about our service and product quality...
                                </Typography>
                                <Divider sx={{width:"80%",margin:"20px 0px 0px 10%"}}/>
                                <Box sx={{padding:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <Typography sx={{marginRight:"5px",fontWeight:700,color:"#73566f"}}>
                                       Rate the product :
                                    </Typography>
                                    <Rating onChange={(e)=>setRatndCmnt("rating",e.target.value)}/>  
                                </Box>
                                <Divider sx={{width:"80%",margin:"20px 0px 10px 10%"}}/>
                                <Box sx={{padding:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <Typography sx={{marginRight:"5px",fontWeight:700,color:"#73566f"}}>
                                       Leave a comment :
                                    </Typography>
                                    <TxtfieldCstm   label="Comment"  placeholder="Comment.." fxn={(e)=>setRatndCmnt("comment",e)} />
                                </Box>
                          </Box>
                </ThisProductBox>
            </ThisProductCont>
       </Grid>
       
    )
  }