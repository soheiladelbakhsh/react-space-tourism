import React, { createContext } from 'react'

export const Allstate=createContext({
    Bg:[],
    setBg:()=>{},
    Hover:[],
    setHover:()=>{}
})


const Context = ({children}) => {
  const [Bg, setBg] = React.useState("")
  const [Hover, setHover] = React.useState(1)
    
    return (
        <Allstate.Provider value={{
            Bg:Bg,
            setBg:setBg,
            Hover,
            setHover
        }
        }>
            {children}
        </Allstate.Provider>
    )
}

export default Context
