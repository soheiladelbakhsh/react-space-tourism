import React, { createContext } from 'react';



export const Contexts = createContext({
    FontFamily:[],
    setFontFamily:()=>{}
});

const Context = ({children}) => {

    const [FontFamily, setFontFamily] = React.useState([])

    return (
        <Contexts.Provider value={{
            FontFamily, setFontFamily
        }}>
            {children}
        </Contexts.Provider>
    )
};

export default Context;
