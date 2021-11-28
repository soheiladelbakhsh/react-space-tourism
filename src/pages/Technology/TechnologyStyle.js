import { makeStyles } from "@mui/styles";



import BgDesktopTechnology from "../../assets/technology/background-technology-desktop.jpg"
import { Theme } from "../../theme/Theme";

export const TechnologyStyle=makeStyles({
    BgTechnology:{
        backgroundImage:`URL(${BgDesktopTechnology})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%",
        minHeight:"100vh",
        position:"absolute",
        top:"0",
        left:"0",
        zIndex:"-2"
    },
    btnTechnology:{
        width:"72px",
        height:"72px",
        borderRadius:"100%",
        backgroundColor:"transparent",
        border:"1px solid white",
        transition:"all ease .5s",
        '&:hover':{
            backgroundColor:"white",
            '& h4':{
                color:Theme.palette.primary.dark
            }
        }
    },
    fontTransitionUppercase:{
        textTransform:"uppercase"
    },
    PortraitImg:{
       
        width:"450px"
    },
    selecteditem:{
        backgroundColor:Theme.palette.primary.main,
        '& h4':{
            color:`${Theme.palette.primary.dark}!important`
        }
    }
   
})