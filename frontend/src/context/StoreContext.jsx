import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems] = useState({});


    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,


        
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
  
    )
}
export default StoreContextProvider;