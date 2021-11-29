import { makeStyles } from "@mui/styles";
import CrewDesktopBg from "../../assets/crew/background-crew-desktop.jpg"
import { Theme } from "../../theme/Theme";

export const CrewStyle=makeStyles({
    bgCrew:{
        backgroundImage:`URL(${CrewDesktopBg})`,
        width:"100%",
        minHeight:"100vh",
        backgroundSize:"cover",
        position:"absolute",
        left:"0",
        top:"0",
        zIndex:"-2"
    },
    uppercaseTransform:{
        textTransform:"uppercase"
    },
    btnRound:{
        backgroundColor:"transparent",
        marginRight:"22px",
        zIndex:"2",
        '& span':{
            display:"inline-block",
            width:"13px",
            height:"13px",
            backgroundColor:Theme.palette.primary.grayHover,
            borderRadius:"100%",
            transition:"all ease .3s"
        },
        '&:hover':{
            '& span':{
                backgroundColor:Theme.palette.primary.main
            }
        },
    },
    imgCrew:{
        width:"412px",
        height:"100%"
      },
      resModeBtnGroup:{
          [Theme.breakpoints.down('lg')]:{
              position:"relative!important",
              bottom:"0!important",
              margin:"1rem 0 2rem 0"
          }
      },
      resModeCrew:{
          [Theme.breakpoints.down('lg')]:{
              display:"flex!important",
              flexDirection:"column!important",
              alignItems:"center!important",
              textAlign:"center!important"
          }
      },
      resModeCrewItem:{
        [Theme.breakpoints.down('lg')]:{
            display:"flex!important",
            flexDirection:"column!important",
            alignItems:"center!important",
            textAlign:"center!important"
        },
        '& h5':{
            marginBottom:'2rem!important'
        }
    }
})