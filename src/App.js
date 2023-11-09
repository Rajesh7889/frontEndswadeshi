import './App.css';
import React, {useEffect, useLayoutEffect, useRef, useState} from "react"
import Nav from './components/header/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./components/footer/Footer"
import Signup from './components/clientComps/Signup';
import Login from './components/clientComps/Login';
import Private from './components/functionalities/Private';
import Deshboard from './components/deshbord/Deshboard';
import Forgotpassword from './components/clientComps/ForgotPassword';
import Changepassword from './components/clientComps/Changepassword';
import ProductDetails from './components/deshbord/productDetails/ProductDetails';
import { Grid, Box, Drawer, useMediaQuery } from "@mui/material";
import Drawerr from './components/sidebar/Drawerr';
import CategoriesSearch from './components/deshbord/CategoriesSearch';
import { MainComp, SideBar, SideBarbutton } from './styles/AppStyle';
import { useTheme } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import OrderProduct from './components/clientComps/OrderProduct';
import Favlist from './components/clientComps/Favlist';
import NOtification from './components/clientComps/NotificationComponents';
import ShopingCard from './components/clientComps/ShopingCard';
import Help from './components/clientComps/Help';
import CreateCourse from './components/handcrafting/CreateCourse';
import GetCourse from './components/handcrafting/GetCourse';
import BuyProduct from './components/deshbord/order/BuyProduct';
import IdenticalproductShow from './components/deshbord/showproductcomponentfunctionalities/IdenticalproductShow';
import Subcategoriessearch from './components/deshbord/Subcategoriessearch';
import Searchcomp from './components/deshbord/unitcomponents/Searchcomp';
import Pagenotfound from './components/deshbord/Pagenotfound'
import OrderStatus from "./components/deshbord/order/orderstatus/OrderStatus"
import Myprofile from './components/clientComps/Myprofile';
import {Container} from "./components/deshbord/ShowProductComponent"
import Sellerpage from './components/sellercomponents/Sellerpage';
import Sellerreglogin from './components/sellercomponents/Sellerreg&login';
import SllrDshbrd from './components/sellercomponents/sellerDeshboard/SllrDshbrd';

function App() {
  
  const [height,setHeight]=useState(0)
  const elementRef=useRef(null)
  

  //height setting..
  useLayoutEffect(()=>{
    const handleResize=()=>{
      setHeight(elementRef.current.offsetHeight-110)
    };
    handleResize();
    window.addEventListener('resize',handleResize)
    return()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])


 
  const  [sidebar,setSidebar]=useState(true)
  const [wdth,setWdth]=useState(300)

  useEffect(()=>{sidebar ? setWdth(300):setWdth(0)},[sidebar])

 
  const theme=useTheme()
 const matches= useMediaQuery(theme.breakpoints.up('md'))


     // Drawer..
     const [state, setState] = useState({left: false});
     const toggleDrawer = (anchor, open) => () => {
        setState({ [anchor]: open });
    };
  useEffect(()=>theme&&toggleDrawer("left", false),[matches])

  return (
    <Box ref={elementRef} sx={{height:"100vh"}} >
     <BrowserRouter>
                <Searchcomp/>
                <Nav/> 
         {matches
               ?<SideBarbutton 
                   variant="text" 
                   onClick={()=>setSidebar(!sidebar)} 
                   startIcon={sidebar
                                   ?<ArrowLeftIcon/>
                                   :<ArrowRightIcon/>
                              }
                 >
                   categories
                </SideBarbutton>
               :<SideBarbutton 
                      onClick={toggleDrawer("left", true)} 
                 >
                    <MenuIcon sx={{fontSize:"35px"}}/>
                 </SideBarbutton>
           }
         <Box >
            <Box sx={{width:"100%",display:"flex",margin:0,padding:0,justifyContent:"center",alignItems:"center"}} >
              {sidebar &&
               <SideBar theme={theme} height={height} wdth={wdth}>
                   <Drawerr/>
               </SideBar>}
               <Box sx={{width:matches? sidebar?`calc(100% - ${wdth}px)`:"80%":"100%"}}>
                <MainComp theme={theme} height={height} wdth={wdth}>
                 <Grid container  sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%"}}>
                    <Container>
                     <Routes>
                          <Route  element={<Private/>}>
                            <Route path="/myprofile" element={<Myprofile />}/>
                            <Route path="/orderstatus/:id" element={<OrderStatus/>}/>
                            <Route path="/sellerpage" element={<Sellerpage/>}/>
                            <Route path="/Sellerreg-login" element={<Sellerreglogin/>}/>
                            <Route path="/sellerDeshboard/*" element={<SllrDshbrd/>}/>
                            <Route path="/Sellerlogin" element={"<Sellerreglogin/>"}/>
                          </Route>

                          <Route path="/" element={<Deshboard/>}/>
                          <Route path="/signup" element={<Signup />}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/create-videoCourses" element={<CreateCourse/>}/>
                          <Route path="/get-videoCourses" element={<GetCourse/>}/>
                          <Route path="/help" element={<Help/>}/>
                          <Route path="/card" element={<ShopingCard/>}/>
                          <Route path="/notifications" element={<NOtification/>}/>
                          <Route path="/favoritelist" element={<Favlist/>}/>
                          <Route path="/orderproduct" element={<OrderProduct/>}/>
                          <Route path="/forgotpassword" element={<Forgotpassword />}/>
                          <Route path="/chagnepassword/:id" element={<Changepassword />}/>
                          <Route path='/products/products-details/:id' element={<ProductDetails/>}/>
                          <Route path='/products/products-buy/:id' element={<BuyProduct/>}/>
                          <Route path='/categorical-search/:title/:code' element={<CategoriesSearch/>}/>
                          <Route path='/subcategories-search/:cat/:subcat' element={<Subcategoriessearch />}/>
                          <Route path='/identical-products/:name?' element={<IdenticalproductShow />}/>
                          <Route path='*' element={<Pagenotfound />}/>
                     </Routes>
                    </Container>
                   <Footer/>
                 </Grid>
                </MainComp>
            </Box>
       </Box>
      </Box>

            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
             >
               <Drawerr  sx={{ width: 250 ,display:{md:"none"} }}  fxn={toggleDrawer("left", false)}/> 
             </Drawer>
       
     </BrowserRouter>
      

      </Box>

  );
}

export default React.memo(App);
