import { useTheme } from "../context/ThemeContext";

export default function DemonstrateThemeChange() {
  const { theme } = useTheme();

  return (
    <div className="p-2">
      <div
        className={`h-48 w-48 rounded flex justify-center items-center ${
          theme === "light" ? "bg-gray-300" : "bg-black text-white"
        }`}
      >
        <p>{theme}</p>
      </div>
    </div>
  );
}
