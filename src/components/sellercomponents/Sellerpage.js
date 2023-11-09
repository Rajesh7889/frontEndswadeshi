import { Box, Button,Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Divider } from '../deshbord/order/BuyProduct';
import TaskIcon from '@mui/icons-material/Task';

const Sellerpage = () => {
   const navigate=useNavigate()
    const params=useParams()

    const acuntRqurmnt=[
        "Active Mobile Number",
        "Active Email Id",
        "Regular GSTIN *",
        "PAN DEtails **",
        "Active Bank Account",
        "At least 1 Product to sell",
    ]
  return (
    <Box sx={{width:"100%",minHeight:"100vh",backgroundColor:"rgb(229, 229, 229)"}}>
        <Typography sx={{color:"#73566f",fontWeight:700,textAlign:"center",fontSize:"20px",marginTop:"20px",padding:"10px",backgroundColor:"#fff"}}>
            Sell on Swadeshi and be a part of Swadeshi Bazaar
        </Typography>
        <Box sx={{position:"relative",marginTop:"10px"}}>
           <Box sx={{clipPath:" polygon(53% 0, 100% 0, 72% 50%, 100% 100%, 0 100%, 0 0)",backgroundColor:"#73566f",height:"200px",display:"flex",alignItems:"center"}}>
              <Typography sx={{width:"73%",textAlign:"center",color:"white",fontWeight:800,fontSize:"25px"}}>
                   Become a seller on Swadeshi
              </Typography>
           </Box>
           <Box sx={{position:"absolute",top:0,right:0,backgroundColor:"#73566f",clipPath:"polygon(100% 0, 100% 100%, 0 50%)",height:"200px",width:"25%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Button sx={{fontWeight:800,color:"#73566f",backgroundColor:"white",width:"100%",fontSize:{sm:"15px",xs:"10px",":hover":{backgroundColor:"white"}}}} onClick={()=>navigate("/Sellerreg-login")}>
                 Start Selling
              </Button>
           </Box>
        </Box>
        <Typography sx={{color:"#73566f",fontWeight:700,textAlign:"center",fontSize:"20px",margin:"20px 0px 10px 0px",padding:"10px",backgroundColor:"#fff"}}>
            Why sell on Swadesi Bazaar?
        </Typography>
        <Grid container>
              <Grid item sm={4} xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                 <Box sx={{height:{lg:"250px",md:"300px",sm:"350px",xs:"230px"},padding:{lg:"10px",md:"5px",xs:"10px"},boxShadow:"0px 0px 10px 1px black",position:"relative",width:"80%",backgroundColor:"white",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                      <CurrencyRupeeIcon sx={{color:"white",backgroundColor:"#73566f",padding:"10px",fontSize:"50px",borderRadius:"50%"}}/>
                      <Typography sx={{textAlign:'center',fontSize:{lg:"150%",md:"120%",xs:"150%"}}}>
                         Receive timely payments
                      </Typography>
                      <Typography  sx={{textAlign:'center',fontSize:{xs:"90%",md:"80%",lg:"90%"}}}>
                         Swadeshi Bazaar ensures your payments are deposited directly in your bank account within 4-8 days.
                      </Typography>
                 </Box>
              </Grid>
              <Grid item sm={4} xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                 <Box sx={{boxShadow:"0px 0px 10px 1px black",height:{lg:"250px",md:"300px",sm:"350px",xs:"230px"},padding:{lg:"10px",md:"5px",xs:"10px"},position:"relative",width:"80%",backgroundColor:"white",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                      <LocalShippingIcon sx={{color:"white",backgroundColor:"#73566f",padding:"10px",fontSize:"50px",borderRadius:"50%"}}/>
                      <Typography sx={{textAlign:'center',fontSize:{lg:"150%",md:"120%",xs:"150%"}}}>
                         Stress-free delivery
                      </Typography>
                      <Typography  sx={{textAlign:'center',fontSize:{xs:"90%",md:"80%",lg:"90%"}}}>
                        Deliver to 100% of Bharata's serivceable pincodes, through Easy Ship & Fulfillment by Swadeshi bazaar.
                      </Typography>
                 </Box>
              </Grid>
              <Grid item sm={4} xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                 <Box sx={{boxShadow:"0px 0px 10px 1px black",height:{lg:"250px",md:"300px",sm:"350px",xs:"230px"},padding:{lg:"10px",md:"5px",xs:"10px"},position:"relative",width:"80%",backgroundColor:"white",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                      <FlightLandIcon sx={{color:"white",backgroundColor:"#73566f",padding:"10px",fontSize:"50px",borderRadius:"50%"}}/>
                      <Typography sx={{textAlign:'center',fontSize:{lg:"150%",md:"120%",xs:"150%"}}}>
                         Reach thousands of customers
                      </Typography>
                      <Typography  sx={{textAlign:'center',fontSize:{xs:"90%",md:"80%",lg:"90%"}}}>
                         Sell to thousands of engaged customer visiting to our website through browsers.
                      </Typography>
                 </Box>
              </Grid>
            </Grid>
            <Typography sx={{color:"#73566f",fontWeight:700,textAlign:"center",fontSize:"20px",margin:"20px 0px 10px 0px",padding:"10px",backgroundColor:"#fff"}}>
                 Create Account
             </Typography>
             <Grid container>
               <Grid item sm={5} xs={12} sx={{padding:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
               <Box sx={{boxShadow:"0px 0px 10px 1px black",height:{lg:"250px",md:"350px",sm:"350px",xs:"230px"},padding:{lg:"10px",md:"5px",xs:"10px"},position:"relative",width:"80%",maxWidth:"430px",backgroundColor:"white",borderRadius:"15px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                     <Box>
                      { acuntRqurmnt.map((itm,indx)=>{
                          return(<Box key={indx} sx={{padding:"5px",display:"flex"}}> 
                                    <CheckBoxIcon sx={{marginRight:"5px",color:"green"}}/>
                                    <Typography sx={{fontSize:"15px", fontWeight:700,color:"rgb(94, 94, 94)"}}>
                                       {itm}
                                    </Typography>
                                 </Box>)
                           })}
                     </Box>
                  </Box>
               </Grid>
               <Grid item sm={6} xs={12}>
                     <Typography sx={{textAlign:"center",color:"rgb(129, 129, 129)",fontWeight:600,letterSpacing:"1px",wordSpacing:"2px",fontSize:"100%",padding:{sm:"30px",md:"60px"},marginBottom:"20px"}}>
                         Creating your Flipkart seller account is a quick process, taking less than 10 minutes, and requires only 3 documents. Follow the checklist to ensure a seamless account creation experience. By having these documents ready, you can streamline the account creation process and get started on Flipkart as an online seller in no time.
                     </Typography>
               </Grid>
               <Grid item xs={12} sx={{marginBottom:"20px",display:"flex",justifyContent:"center"}}>
                  <Box sx={{boxShadow:"0px 0px 10px 1px black",height:{lg:"250px",md:"300px",sm:"350px",xs:"400px"},padding:{lg:"10px",md:"5px",xs:"10px"},position:"relative",width:"80%",backgroundColor:"white",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                     <Typography sx={{fontWeight:800,color:"#73566f"}}>
                          Don't have a GSTIN?
                     </Typography>
                     <Typography sx={{fontSize:"15px",fontWeight:700,padding:"5px",color:"rgb(129, 129, 129)",textAlign:"center"}}>
                        Follow the steps below to generate for your online business.
                     </Typography>
                     <Divider sx={{color:"lightGreey",width:"100%"}}/>
                     <Grid container sx={{marginTop:"10px"}}>
                        <Grid item sm={4} xs={12} sx={{borderRight:{sm:"1px solid lightgrey"},display:"flex",justifyContent:"center",alignItems:"center"}}>
                           <Box sx={{padding:"10px",color:"#73566f",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}}>
                              <HowToRegIcon sx={{backgroundColor:"#73566f",borderRadius:"50%",color:"white",fontSize:"45px",padding:"5px"}}/>
                              <Typography sx={{textAlign:"center",padding:"5px 0px 5px 0px"}}>
                                 Register / Login to www.gst.gov.in
                              </Typography>
                           </Box>
                        </Grid>
                        <Grid item sm={4} xs={12} sx={{borderRight:{sm:"1px solid lightgrey"},borderTop:{sm:"none",xs:"1px solid lightgrey"},borderBottom:{sm:"none",xs:"1px solid lightgrey"},display:"flex",justifyContent:"center",alignItems:"center"}}>
                           <Box sx={{padding:"10px",color:"#73566f",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}}>
                             <span style={{backgroundColor:"#73566f",borderRadius:"50%",padding:"5px"}}>
                               <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.4747 28.4777C22.4308 28.908 22.2922 29.3232 22.0688 29.6935C21.8453 30.0638 21.5426 30.38 21.1823 30.6194C20.4525 31.106 19.5469 31.2466 18.7228 31.2466C18.0042 31.242 17.2889 31.1476 16.5938 30.9653C16.3098 30.8822 16.07 30.6905 15.9264 30.4318C15.7828 30.1731 15.7468 29.8683 15.8264 29.5833C15.9059 29.2983 16.0945 29.0561 16.3513 28.9092C16.6081 28.7623 16.9125 28.7224 17.1984 28.7983C17.8144 28.9671 19.3008 29.178 19.9477 28.7477C20.0714 28.6647 20.205 28.5339 20.2486 28.195C20.2978 27.8196 20.1488 27.6185 18.4514 27.1277C17.1366 26.748 14.9358 26.111 15.217 23.8778C15.2608 23.456 15.3969 23.049 15.6156 22.6857C15.8343 22.3223 16.1304 22.0116 16.4827 21.7755C18.1477 20.6505 20.8027 21.31 21.0994 21.3874C21.388 21.4633 21.6347 21.6507 21.7852 21.9085C21.9357 22.1663 21.9775 22.4733 21.9016 22.762C21.8257 23.0506 21.6383 23.2973 21.3805 23.4478C21.1227 23.5982 20.8157 23.6401 20.527 23.5642C19.897 23.3997 18.3853 23.2042 17.7384 23.643C17.6536 23.7002 17.5838 23.7769 17.5349 23.8667C17.4859 23.9566 17.4593 24.0568 17.4572 24.1591C17.4417 24.2856 17.4375 24.3124 17.6147 24.4263C17.9395 24.6358 18.5203 24.8031 19.0842 24.9663C20.4609 25.3642 22.7897 26.0435 22.4747 28.4777ZM30.375 13.2466V16.6216C30.375 16.92 30.2565 17.2061 30.0455 17.4171C29.8345 17.6281 29.5484 17.7466 29.25 17.7466C28.9516 17.7466 28.6655 17.6281 28.4545 17.4171C28.2435 17.2061 28.125 16.92 28.125 16.6216V14.3716H21.375C21.0766 14.3716 20.7905 14.2531 20.5795 14.0421C20.3685 13.8311 20.25 13.545 20.25 13.2466V6.49658H7.875V16.6216C7.875 16.92 7.75647 17.2061 7.54549 17.4171C7.33452 17.6281 7.04837 17.7466 6.75 17.7466C6.45163 17.7466 6.16548 17.6281 5.95451 17.4171C5.74353 17.2061 5.625 16.92 5.625 16.6216V6.49658C5.625 5.89984 5.86205 5.32755 6.28401 4.90559C6.70597 4.48363 7.27826 4.24658 7.875 4.24658H21.375C21.673 4.24672 21.9587 4.36506 22.1695 4.57564L30.0445 12.4506C30.1492 12.5551 30.2323 12.6791 30.289 12.8157C30.3457 12.9523 30.3749 13.0987 30.375 13.2466ZM22.5 12.1216H26.5345L22.5 8.08705V12.1216ZM12.375 25.6216H11.25C10.9516 25.6216 10.6655 25.7401 10.4545 25.9511C10.2435 26.1621 10.125 26.4482 10.125 26.7466C10.125 27.045 10.2435 27.3311 10.4545 27.5421C10.6655 27.7531 10.9516 27.8716 11.25 27.8716V28.6155C10.926 28.8607 10.5313 28.9944 10.125 28.9966C8.88469 28.9966 7.875 27.731 7.875 26.1841C7.875 24.6372 8.88469 23.3716 10.125 23.3716C10.5038 23.3731 10.8731 23.4898 11.1839 23.7063C11.4312 23.8673 11.732 23.9247 12.0212 23.8661C12.3105 23.8075 12.5651 23.6375 12.7303 23.3929C12.8954 23.1483 12.9578 22.8485 12.9039 22.5583C12.8501 22.2681 12.6844 22.0107 12.4425 21.8416C11.7595 21.375 10.9522 21.1242 10.125 21.1216C7.64438 21.1216 5.625 23.3927 5.625 26.1841C5.625 28.9755 7.64438 31.2466 10.125 31.2466C10.7005 31.2419 11.2691 31.1198 11.7957 30.8876C12.3224 30.6555 12.7961 30.3183 13.1878 29.8966C13.3881 29.6872 13.5 29.4087 13.5 29.1189V26.7466C13.5 26.4482 13.3815 26.1621 13.1705 25.9511C12.9595 25.7401 12.6734 25.6216 12.375 25.6216Z" fill="white"/>
                                  <path d="M30.0455 23.0421C30.2565 22.8311 30.375 22.545 30.375 22.2466C30.375 21.9482 30.2565 21.6621 30.0455 21.4511C29.8345 21.2401 29.5484 21.1216 29.25 21.1216H24.75C24.4516 21.1216 24.1655 21.2401 23.9545 21.4511C23.7435 21.6621 23.625 21.9482 23.625 22.2466C23.625 22.545 23.7435 22.8311 23.9545 23.0421C24.1655 23.2531 24.4516 23.3716 24.75 23.3716H25.875V30.1216C25.875 30.42 25.9935 30.7061 26.2045 30.9171C26.4155 31.1281 26.7016 31.2466 27 31.2466C27.2984 31.2466 27.5845 31.1281 27.7955 30.9171C28.0065 30.7061 28.125 30.42 28.125 30.1216V23.3716H29.25C29.5484 23.3716 29.8345 23.2531 30.0455 23.0421Z" fill="white"/>
                                </svg>
                              </span>
                              <Typography sx={{textAlign:"center",padding:"5px 0px 5px 0px"}}>
                                 Fill in the GST Enrolment Application Form
                              </Typography>
                           </Box>
                        </Grid>
                        <Grid item sm={4} xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                           <Box sx={{padding:"10px",color:"#73566f",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}}>
                              <TaskIcon sx={{backgroundColor:"#73566f",borderRadius:"50%",color:"white",fontSize:"45px",padding:"5px"}}/>
                              <Typography sx={{textAlign:"center",padding:"5px 0px 5px 0px"}}>
                                 Submint Enrolment Application
                              </Typography>
                           </Box>
                        </Grid>
                     </Grid>
                  </Box>
               </Grid>
             </Grid>
             <Typography sx={{color:"#73566f",fontWeight:700,textAlign:"center",fontSize:"20px",margin:"20px 0px 10px 0px",padding:"10px",backgroundColor:"#fff"}}>
                 Register Your Products
             </Typography>
                <Typography sx={{textAlign:"center",color:"rgb(129, 129, 129)",padding:"20px 10% 20px 10%",fontWeight:600,letterSpacing:"1px",wordSpacing:"2px"}}>
                     Registering your product on Swadeshi Bazaar makes it visible to customers, and enabling them to view and purchase your product. It involves creating a detailed product page that includes essential information such as product title, description, images, pricing, and other relevant details. A well-crafted listing helps attract potential customers and facilitates the sale of your product on Swadeshi Bazaar.
                </Typography>
                <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <Box sx={{boxShadow:"0px 0px 10px 1px black",height:{lg:"250px",md:"350px",sm:"350px",xs:"420px"},width:"80%",backgroundColor:"white",borderRadius:"15px",padding:"20px"}}>
                      <Grid container>
                      <Grid item xs={12}>
                         <Typography sx={{fontWeight:800,marginTop:"30px",color:"#73566f",textAlign:"center"}}>
                            Registeration of products can be done in two ways
                         </Typography>
                         <Divider sx={{color:"lightGreey",width:"100%",marginTop:"30px"}}/>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                          <Typography sx={{padding:"10px",fontSize:15,color:"rgb(66, 66, 66)"}}>
                              1. If your product is already available on Swadeshi Bazaar, you have the option to seamlessly link or 'Latch' onto the existing product listing. This allows you to make your product live on the platform without the need to create a separate listing.
                          </Typography>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                           <Typography sx={{padding:"10px",fontSize:15,color:"rgb(66, 66, 66)"}}>
                              2. For products not currently available on Swadeshi Bazaar, you'll need to provide complete information and create a new listing with details like description, dimensions, features, images, and usage instructions.
                           </Typography>
                      </Grid>
                      </Grid>
                     </Box>
                </Grid>
                <Typography sx={{color:"#73566f",fontWeight:700,textAlign:"center",fontSize:"20px",margin:"20px 0px 10px 0px",padding:"10px",backgroundColor:"#fff"}}>
                   Sellers Help and Support
                </Typography>
                <Typography sx={{textAlign:"center",color:"rgb(129, 129, 129)",padding:"20px 10% 20px 10%",fontWeight:600,letterSpacing:"1px",wordSpacing:"2px"}}>
                  We prioritise your needs and are committed to providing you with prompt assistance, whether you have questions, doubts, or require any kind of support for your business. Our dedicated team is here to help you every step of the way, ensuring that you have a smooth and successful selling experience on Swadeshi Bazaar. Feel free to reach out to us whenever you need assistance - we're always here to support you.
                </Typography>
    </Box>
    
  )
}

export default Sellerpage