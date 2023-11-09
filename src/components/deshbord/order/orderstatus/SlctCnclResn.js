

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

export default function SlctCnclOptn({reasonCode,reson}) {
  const [reasonCod, setReasoncod] = React.useState('');
  const classes = useStyles()
  const reasons=[
    {value:0,txt:'No specific reason'},
    {value:1,txt:'I want to change the contact details'},
    {value:2,txt:'I was hoping for a shorter delivery times'},
    {value:3,txt:"I'm worried about the ratings/reviews"},
    {value:4,txt:'My reasons are not listed here'},
    {value:5,txt:'I want to change the delivery address'},
    {value:6,txt:'I want to change the payment option'},
    {value:7,txt:'Price of the product has now decreased'},
    {value:8,txt:'I want to change the size/color/type'},
  ]

  const handleChange = (event) => {
    reasonCode(event.target.value)
    setReasoncod(event.target.value);
  };

  return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120,width:"90%" }}>
         <InputLabel className={classes.label} id="demo-simple-select-standard-label">
             Reason for Cancellation*
         </InputLabel>
         <Select
            className={classes.select}
            value={reasonCod}
            onChange={handleChange}
            label="Age"
            sx={{width:"100%",color:'white',paddingLeft:"5px"}}
        >
          {reasons.map((item,index)=>{
               return(<MenuItem key={`${index}sd`} value={item.value}  sx={{paddingLeft:"5px",backgroundColor:"#73566f",color:index!==reasonCod?"white":"#73566f","&:hover":{color:"#73566f"}}}>
                         {item.txt}
                      </MenuItem> )
                })
          }
        </Select>
      </FormControl>
  );
}




 export const useStyles = makeStyles({
    select: {
       '&:before': {
        borderColor: '#73566f',
        },
       '&:after': {
        borderColor: '#73566f',
        },
       '&:not(.Mui-disabled):hover::before': {
          borderColor: '#73566f',
        },
   
      },
     label: {
         color: "#73566f",
         fontWeight:700,
         fontSize:"20px",
         "&.Mui-focused": {
         color: "#73566f",},
      },
 
      root: {
         color: '#73566f',
      },
})

