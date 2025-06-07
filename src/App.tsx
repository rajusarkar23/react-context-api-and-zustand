import AddToCartButton from "./components/AddToCartButton";
import LoginButton from "./components/LoginButton";
import { useUserStore } from "./store/useUserStore";

const App = () => {
  const {isUserLogedIn}=  useUserStore()
  return (
    <div>
      <LoginButton />

      {
        isUserLogedIn && (<AddToCartButton />)
      }
    </div>
  );
};

export default App;
