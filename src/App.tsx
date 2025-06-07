import AddToCartButton from "./components/AddToCartButton";
import LoginButton from "./components/LoginButton";
import { useUserStore } from "./store/useUserStore";

// get the theme provider from theme context
// import { ThemeProvider } from "./context/ThemeContext";
// get the theme switch component
// import ThemeSwitch from "./components/ThemeSwitch";
// import DemonstrateThemeChange from "./components/DemonstrateThemeChange";

const App = () => {
  const {isUserLogedIn}=  useUserStore()
  return (

    // <ThemeProvider>
    //   <ThemeSwitch />
    //   <DemonstrateThemeChange />
    // </ThemeProvider>

    
    <div>
      <LoginButton />

      {
        isUserLogedIn && (<AddToCartButton />)
      }
    </div>
  );
};

export default App;