import { createContext, useState } from "react";
import { ProductData, UserData } from "../constant/variable";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [ account, setAccount ] = useState(UserData);
    const [ selectedProduct,setSelectedProduct] = useState(ProductData);
        
    return (
        <DataContext.Provider value={{ 
            account, 
            setAccount,
            selectedProduct,
            setSelectedProduct 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;