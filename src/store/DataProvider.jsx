import { createContext, useCallback, useEffect, useReducer, useState } from "react";


export const DataContext = createContext({productCategories: [], prodBycategory: {}, dyfettch: () => {},  
categoriesFetch: () => {}, cartItems: [], makeCart: () => {}, addQuantity: () => {}});




const Data = ({children}) => {
    const [productCategories, setProductCategories] = useState([]);
    const [prodBycategory, setProdBycategory] = useState();
    const [cartItems, setCartItems] = useState([]);

    const categoriesFetch = useCallback(() => {
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((res) => {setProductCategories(res)});
    }, [])

    const dyfettch = useCallback((inp) => {
        fetch(`https://dummyjson.com/products/category/${inp}`)
        .then(res => res.json())
        .then((res) => {setProdBycategory(res.products)});
    }, [])


    const makeCart = (obj) => {
        let newobj = [obj]

        let existing = cartItems.filter((itm) => itm[0].id === obj[0].id)
        if (existing.length > 0) {
            return 1
        }

        if (cartItems.length) {
            newobj = [...cartItems, obj]
        }
        setCartItems(newobj);
    }

    const addQuantity = (itemId, action) => {
        let ind = cartItems.findIndex((obj) => obj[0].id === itemId)
        let temopItems = cartItems;

        if (action === 'add') {
            temopItems[ind][0].cartQty += 1
            setCartItems(temopItems);
        } else if (action === 'subtract' && temopItems[ind][0].cartQty > 1) {
            temopItems[ind][0].cartQty -= 1
            setCartItems(temopItems);
        } else if (action === 'delete') {
            temopItems.splice(ind, 1)
            setCartItems(temopItems);
        }

      }

    

    return <DataContext.Provider value={{productCategories, prodBycategory, dyfettch, categoriesFetch, cartItems,
         makeCart, addQuantity}} >{children}</DataContext.Provider>
}


export default Data;