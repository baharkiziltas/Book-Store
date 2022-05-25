import {useState, createContext, useContext, useEffect} from 'react'

const BasketContext = createContext();

const BasketProvider = ({children}) => {
    const [items, setitems] = useState ([]);

    const addtobasket = (books) => {
        
         setitems((items) => [books, ...items]);
        


    // const addtobasket = (books, findBasketItem) => {
    //     if (!findBasketItem){
    //         return setitems((items) => [books, ...items]);
    //     }

        // const filtered = items.filter((item) => item.id !== findBasketItem.id);
        // setitems(filtered);
    }

    const values ={
        items,
        setitems,
        addtobasket,
    };

    

    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}

const useBasket = () => useContext(BasketContext)

export{
    BasketProvider,
    useBasket
}