import { Box, Typography } from "@mui/material"

export const DatComp=({txt,icon,date,option,upr})=>{
    return(
          <Box sx={{padding:"5px",fontWeight:700,color:"#73566f",overflow:"auto",display:"flex",alignItems:'center',flexDirection:upr?"row-reverse":"row"}}>
              {icon}
              <Typography sx={{padding:"5px",fontWeight:700, color:"#73566f",overflow:"auto"}}>
                    {txt}{date&& <>{new Date(date).toLocaleDateString(undefined,option)}</>}
              </Typography>
          </Box>
    )
  
  }