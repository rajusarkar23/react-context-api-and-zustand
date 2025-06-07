import { useUserStore } from "../store/useUserStore"

export default function AddToCartButton(){
    const {addItemToUserShoppingCart} = useUserStore()
    return (
        <div className="flex justify-center items-center min-h-[30vh]">
            <button
             className="border bg-blue-300 active:bg-blue-400"
             onClick={() => {
                addItemToUserShoppingCart({productName: "Ferrari Roma", productPrice: "4 CR", productQty: 1})
             }}
            >Add to cart</button>
        </div>
    )
}