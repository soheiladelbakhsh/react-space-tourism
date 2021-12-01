import React, { createContext } from 'react';



export const Contexts = createContext({
    Toggling:[],
    setToggling:()=>{}
});

const Context = ({children}) => {

    const [Toggling, setToggling] = React.useState(false);

    return (
        <Contexts.Provider value={{
            Toggling, setToggling
        }}>
            {children}
        </Contexts.Provider>
    )
};

export default Context;
