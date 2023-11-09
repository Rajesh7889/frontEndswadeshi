import axios from "axios";
import emailjs from '@emailjs/browser';

//search api request...
export const searchItem=async({value})=>{
    try{
            let url='/categorical-search/itm/'+ value;
            const itm= await axios.get(url)
            if(itm.data===false){
              return ""}else if(itm.status>499){
              return false}else{
              return itm.data

            }
     }catch(err){return false}
  }

//Is email already registered for user registeration...
export const chckEmailUser=async(email)=>{
   try{
      const response= await axios.post(`checkemailUser/${email}`)
           return response.data
       }catch(err){console.log("Server error...")}
   }


//Is email already registered for Seller registeration...
export const chckEmailSeller=async(email)=>{
   try{
      const response= await axios.post(`checkemailSeller/${email}`)
           return response.data
       }catch(err){console.log("Server error...")}
   }

 //Is login user is registered as Seller..
 export const chckSeller=async(id)=>{
   try{
      const response= await axios.post(`/getUser/${id}`)
           if(response.data.data){
               localStorage.setItem("seller",JSON.stringify(response.data.data))
                return true
           }else{
                return false
           }
       }catch(err){console.log("Server error...")}
} 


//all product fetching api...
export const getProducts=async(props)=>{
 
  try{
      const result= await axios.get(props.url,{headers:{'Authorization':props.header}})
       if(result.data===false||result.status>499){
      return false
      }else{
       return result.data}
   }catch(err){return false} 
}

//subcatgories api..
export const getsubcaterogies=async({cat,subcat})=>{
    try{
       let url='/subcateries-search/'+cat+'/'+subcat;
       const result= await axios.get(url)
       if(result.data===false||result.status>499){
          return false}else{
          return result.data}
    }catch(err){
        return false
    }
}  

//other functions..
export const tryRequire = (path) => {
  try {
     return require(`../../images/${path}`);
  } catch (err) {
     return null;
  }
  };


 
//favorite and shoping card  id's...

export const favAndCard=async(url,userId,productId)=>{
   try{let compurl=url+userId+'/'+productId
       let result=await axios.put(compurl)
       localStorage.setItem('user',JSON.stringify(result.data))
       return result.data.liked.slice(-1)
   }catch(err){
      alert("site is not working")
   }
}


//favorite item details..
export const favandCardprdctdtls=async(url)=>{
          try{ let result=await axios.post(url)
           return result.data
         }catch(err){alert("site not working")}
}


///filter likes...
export const filterlikedandCard=(user,item)=>{
   let alreadyliked= user.filter(itm=>itm===item._id)
   return alreadyliked?.length?true:false
 }

 //Otp generator..
 export const gnratOTP=()=>Math.floor(Math.random()*1000000)

 //send OTP for email verification..
export const sendOTP=async(OTP,email)=>{
   var templateParams = {
      from_name:"SWADESHI PRODUCTS",
      message: OTP,
      user_email:email
    };
   
    emailjs.send('service_4seeesq', 'template_hi96woi', templateParams, 'ywQKSWe4Is3iYfZ0v' )
      .then(function(response) {
         return 'Emai sent SUCCESSFULLY!';
      }, function(error) {
         return 'FAILED...';
      });
}

 //specific Product details.
 export  const getSpecificProducts=async(id)=>{
   try{
       const result= await axios.get(`get-products-details/${id}`)
       if(result){
          return result.data;
       }else{alert("Not found")}
    }catch(err){alert("Page is not getting loaded")} 
}

//new order address..

export const updtAdrs=async(id,detials)=>{
   try{
        const result=await axios.put(`/update-order-address/${id}`,detials)
         localStorage.setItem("user",JSON.stringify(result.data)) 
         return result.data?true:false
      }catch(err){
      alert("can't update address , something went wrong..")
   }
}

//savings calculation...
export const savings=(itm)=>{
  return Math.ceil((itm.discount*itm.price)/100)
}


//making an order..

export const orderAPI=async(orderdtls)=>{
   try{
      const response= await axios.post("/order",orderdtls)
     
      if(response.data=== false || response.status>499){
        return false
       }else{
         return response.data&&true
       }
   }catch(err){alert("Site not working")}
}

//order status...

export const ordrStatus=async(id,limit)=>{
   try{
      const response= await axios.get(`/myorders/${id}/${limit}`)
      return response.data.length&&response.data
   }catch(err){
      alert("site is not working")
   }
   
}


//canceling order...

export const  cancelOrder=async(id,ordrCnclInfo)=>{
    try { const response= await axios.put(`/cancelorder/${id}`,ordrCnclInfo)
           return response.data
    }catch(err){console.log("server error")}
}

// checking for active order address...
export const chckActvAdrs=async(adrsId)=>{
   try{
      const response= await axios.put(`/is-activeordr-address/${adrsId}`)
      return  (response.data.data)? 1: 0;
   }catch(err){ return 0}
}

//delete  Address...
export const deleteAddress=async(userId,adrsId)=>{
       try { 
          const response= await axios.put(`/deleteAddress/${userId}/${adrsId}`)
            if(response.data.data){
               localStorage.setItem("user",JSON.stringify(response.data.data))
               return 1
            }else if(response.status===204){
               return 2
            }else{return 0}
      }catch(err){
         return 0
      } 
}


//update details....
export const updateDetails=async(userId,details)=>{
   try{
      const response= await axios.put(`/update-my-profile/${userId}`,details)
            if(response.data.data){
               localStorage.setItem("user",JSON.stringify(response.data.data))
               return 1
            }else{
               return 0
            }
        
   }catch(err){
      return 0
   }
}

//update details....
export const addreview=async(productId,details)=>{
   try{
      const response= await axios.post(`/add-product-review/${productId}`,details)
       return response.data.status
   }catch(err){
      return 0
   }
}

//Registering seller..
export const rgstrSllr=async(details)=>{
   try{
   let resopnse=await axios.post("/register-seller",details)
   if(res)
   }catch(err){
      return 0
   }
}