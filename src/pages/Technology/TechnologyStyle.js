import { makeStyles } from "@mui/styles";



import BgDesktopTechnology from "../../assets/technology/background-technology-desktop.jpg"
import { Theme } from "../../theme/Theme";



import { TechnologyDataSource } from "../../data/Data";

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
    landscapeImg:{
        width:"450px",
        [Theme.breakpoints.down('md')]:{
            display:"none",
        }
    },
    PortraitImg:{
        display:"none",
        [Theme.breakpoints.down('md')]:{
            display:"block",
            width:"101.5%!important"
        }
    },
    selecteditem:{
        backgroundColor:Theme.palette.primary.main,
        '& h4':{
            color:`${Theme.palette.primary.dark}!important`
        }
    },
    resModeBtnGroupSecond:{
        [Theme.breakpoints.down('lg')]:{
            display:'flex!important'
        }
    },
    resModeBtnGroupFirst:{
        [Theme.breakpoints.down('lg')]:{
            display:'none!important'
        }
    },
    resModeTechnologyBottom:{
        [Theme.breakpoints.down('lg')]:{
            flexDirection:"column-reverse!important",
            alignItems:"center",
            textAlign:"center"
        }
    },
    resModeTechnologySub:{
        [Theme.breakpoints.down('lg')]:{
            display:"flex!important",
            flexDirection:"column!important",
            alignItems:"center!important",
            marginTop:"3rem!important"
        }
    }
   
})