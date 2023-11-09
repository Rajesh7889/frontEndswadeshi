// name validation..
export const namefxn=(e,fxn1,fxn2)=>{
      let nam=e.trim()
        if(nam.length>1){
          fxn1(nam)
          fxn2(false)
        }else{fxn2(true)}
    }


//Display name validation..
export const displayNamefxn=(e,fxn1,fxn2)=>{
      let nam=e.trim()
        if(nam.length>1){
          fxn1(nam)
          fxn2(false)
        }else{fxn2(true)}
    }


//Store discription validation..
export const storeDisfxn=(e,fxn1,fxn2)=>{
      let nam=e.trim()
        if(nam.length>20){
          fxn1(nam)
          fxn2(false)
        }else{fxn2(true)}
    }


//age validation..
export const agefxn=(e,fxn1,fxn2)=>{
        let ag=e
        if(ag>0 &&ag<110){
          fxn1(ag)
          fxn2(false)
        }else{fxn2(true)}  
   }


//email validations..
export const emailfxn=(e,fxn1,fxn2)=>{
    let eml = e
    let reg=/^[a-zA-Z0-9.!#$&'*+/=?^_~`{|}-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/
    if(reg.test(eml)){
      fxn1(eml)
      fxn2(false)
    }else{fxn2(true)}     
}


//mobile number validation..
export const nmbrfxn=(e,fxn1,fxn2)=>{
    if(e.length===10 && e>999999999){
       fxn1(e)
       fxn2(false)
     }else{fxn2(true)}     
}


//PIN code validation..
export const pinfxn=(e,fxn1,fxn2)=>{
    if(e.trim().length===6 && e>0){
        fxn1(e)
       fxn2(false)
     }else{fxn2(true)}     
}


//Password validation..
export const pswdfxn=(e,fxn1,fxn2)=>{
let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
   if(regex.test(e)){
    fxn1(e)
    fxn2(false)
   }else{fxn2(true)     
}}


//PAN number validation..
export const panfxn=(e,fxn1,fxn2)=>{
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    if (e === null) {
        fxn2(true);
    }
    if (regex.test(e) === true) {
        fxn1(e);
        fxn2(false);
    }
    else {
        fxn2(true);
    }
}

//GST number validaton..
export const gstinfxn=(e,fxn1,fxn2)=>{
    let regex = new RegExp(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);
    if (e === null) {
        fxn2(true);
    }
     if (regex.test(e) === true){
        fxn1(e);
        fxn2(false);
    }
    else {
        fxn2(true);
    }
}