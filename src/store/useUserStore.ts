import { create } from "zustand";
import { persist } from "zustand/middleware";

// TYPE INTERFACE FOR SHOPPING CART
interface UserShoppingCart {
    productName: string,
    productPrice: string,
    productQty: number
}

// TYPE INTERFACE FOR USER
interface User {
    isLoading: boolean,
    isError: boolean,
    errorMessage: string | null
    // TO STORE VALUE
    isUserLogedIn: boolean,
    userShoppingCart: UserShoppingCart[]
    // FUNCTIONS TO CHANGE VALUE
    changeUserLogedInStatus: ({isLogedIn}:{isLogedIn: boolean}) => void
    addItemToUserShoppingCart: ({productName, productPrice, productQty} : {productName: string, productPrice: string, productQty: number}) => void
}

const useUserStore = create(persist<User>((set) => ({
    isLoading: false,
    isError: false,
    errorMessage: null,

    isUserLogedIn: false,
    userShoppingCart: [],

    changeUserLogedInStatus : ({isLogedIn}) => {
        set({isUserLogedIn: isLogedIn})
    },
    addItemToUserShoppingCart: ({productName, productPrice, productQty}) => {
        set((prev) => ({
            userShoppingCart: [...prev.userShoppingCart, {productName, productPrice, productQty}]
        }))
    },
}), {name: "user-store"}))

export { useUserStore }