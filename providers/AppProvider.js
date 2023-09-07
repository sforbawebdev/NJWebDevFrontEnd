
import React, { useState } from 'react'
export const AppContext = React.createContext();


export const AppProvider = props => {
    const [activeNav, setActiveNav] = useState("home");
    return (
        <AppContext.Provider value={{activeNav, setActiveNav}}>
            {props.children}
        </AppContext.Provider>
    );
}

