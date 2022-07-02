
import Box from '@mui/material/Box';

type TextProps = {
    theme:any,
    text:string
  }

const BackgroundText = ({theme, text}:TextProps) => {
  return <Box className="back-text" sx={{color: theme.palette.mode === 'dark' ?'rgba(255,255,255,0.04)':'rgba(78,78,78,0.15)'}}>{ text }</Box>
  ;
};

export default BackgroundText;
