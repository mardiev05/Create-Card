import { createContext, useState } from "react";
export const Store = createContext()
const StoreProvider = ({ children }) => {

    const [data, setData] = useState({
        name: "Shakhzod Mardiev",
        cardNumber: "0000000000000000",
        MM: "00",
        YY: "00",
        CVC: "000"
    })

    console.log(typeof data.MM)

    return <Store.Provider value={{ data, setData }}>
        {children}
    </Store.Provider>;
}

export default StoreProvider
