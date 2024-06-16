import React, { createContext} from "react";

const student = {
    name:"Saroj Pandey",
    address:"ktm"
}
export const Global = createContext()
const GlobalContextProvider = (props)=>(
        <Global.Provider value= {student}>
        {props.children}
    </Global.Provider>
)
export default GlobalContextProvider