import { useEffect, useState } from "react"
import { searchItem } from "../../API/APIreq"
import { Box } from "@mui/material"
import Allsubcatproducts, { ThisProductBox, ThisProductCont } from "../showproductcomponentfunctionalities/Allsubcatproducts"
import { ProductHeading } from "../../../styles/Showcategories"

export default function RelatedItms({product,productDetails}){
    const [data,setData]=useState([])
    async function getData(){
      setData(await searchItem({value:product[0]?.subcat}))
    }
  
       useEffect(()=>{
         getData()
       },[])
  
    return(
      <Box sx={{width:"100%"}}>
              <ThisProductCont sx={{width:"100%"}}>
                      <ThisProductBox >
                        <ProductHeading sx={{textAlign:"center",marginBottom:"10px"}}>Related items </ProductHeading>
                        {
                            data.length&&
                            <Allsubcatproducts comptype={'specific'} product={data.slice(0,10)} productDetails={productDetails}/>
                         }
                         
                      </ThisProductBox>
              </ThisProductCont>
          </Box>
    )
  }