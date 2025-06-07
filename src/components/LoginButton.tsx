import { useUserStore } from "../store/useUserStore"

export default function LoginButton(){
    const {changeUserLogedInStatus, isUserLogedIn} = useUserStore()
    return (
        <div className="flex justify-center items-center min-h-[20vh]">
            <button className="border bg-gray-300 active:bg-gray-400"
            onClick={() => {
                changeUserLogedInStatus({isLogedIn: !isUserLogedIn})
            }}
            >Update login status</button>
        </div>
    )
}