import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Theme: {theme}</button>;
}

export default function ThemeProviderExample() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggleButton />
    </ThemeContext.Provider>
  );
}
