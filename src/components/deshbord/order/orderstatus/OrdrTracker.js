import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {styled } from '@mui/material';

 function OrdrTracker({ordrStagee}) {

     const [sldrvlu,setsldrvlu]=React.useState(0)
  
     React.useEffect(()=>{  
          setsldrvlu(25*(ordrStagee-1));
      },[ordrStagee])
    
     const marks1 = [
                      {
                        value: 2,
                        label:<Msgcon ordrStage={ordrStagee} stage={1} position={1} message={'Registered'}/>,
                      },
                    
                      {
                        value: 25,
                        label:<Msgcon ordrStage={ordrStagee} stage={2} position={0} message={'Dispatched'}/>,
                      },
                      {
                        value: 50,
                        label: <Msgcon ordrStage={ordrStagee} stage={3} position={1} message={'Shipping'}/>,
                      },
                      {
                        value: 75,
                        label: <Msgcon ordrStage={ordrStagee} stage={4} position={0} message={'Arrived'}/>,
                      },
                      {
                        value: 98,
                        label: <Msgcon ordrStage={ordrStagee} stage={5} position={1} message={'Delivered'}/>,
                      },
                   ];
     const marks2 = [
                      {
                        value: 2,
                        label:<Msgcon ordrStage={ordrStagee} stage={1} position={1} message={'Registered'}/>,
                      },
                      {
                        value: 98,
                        label: <Msgcon ordrStage={ordrStagee} stage={6} position={1} message={'canceled'}/>,
                      },
                   ];


      return (
        <Box sx={{ minWidth:"200px",width:"100%"}}>
          <Slider
            aria-label="Restricted values"
            value={sldrvlu}
            step={null}
            marks={ordrStagee===6?marks2:marks1}
            sx={{color:"#73566f",height:"10px"}}
          />
        </Box>
      );
  }


const Msg=styled(Box)(({position,clr})=>({
  fontSize:"12px",
  color:clr,
  border:`3px solid #73566f`,
  overflow:"auto",
  padding:"3px",
  marginTop:position?"-57px":"2px"
}))



const Msgcon=({position,message,stage,ordrStage})=>{
 
  const[stagee,setStage]=React.useState(ordrStage)
  const[clr,setclr]=React.useState("darkOrange")
  React.useEffect(()=>{
    (stage===6)?setclr("darkRed")
    :setclr(stagee>=stage?"green":"darkOrange")
  },[ordrStage])
  
  
  return(
    <Box >
       <Msg position={position} clr={clr}>
        {message}
        <span style={{backgroundColor:"#73566f",height:"11px",position:"absolute",bottom:position?"20px":"26px",width:"15px",borderRadius:"50%",right:"40%"}}/>
        <span style={{backgroundColor:"white",height:"8px",position:"absolute",bottom:position?"20px":"29px",width:"15px",borderRadius:"50%",right:"45%"}}/>
        </Msg>
       
    </Box>
  )
}

export default  OrdrTracker;