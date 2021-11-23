import React, { createContext } from 'react';



export const Contexts = createContext({
    todo:[],
    setTod:()=>{}
});

const Context = ({children}) => {

    const [todo, setTodo] = React.useState([])

    return (
        <Contexts.Provider value={{
            todo, setTodo
        }}>
            {children}
        </Contexts.Provider>
    )
};

export default Context;
