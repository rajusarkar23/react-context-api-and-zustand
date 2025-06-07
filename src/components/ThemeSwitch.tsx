// import the useTheme from our theme context
import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitch() {
  // initiate
  const { theme, toggle } = useTheme();

  return (
    <div className="p-2">
      {/* on button click this will trigger/call the `toggle` function 
        and changes the theme */}
      <button onClick={toggle} className="border p-2 bg-amber-100 rounded">
        Theme switch
      </button>

      <p className="text-4xl">
        Current theme: <span className="underline text-blue-600">{theme}</span>
      </p>
    </div>
  );
}
