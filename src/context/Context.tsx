import  { createContext, useState, ReactNode, useContext } from "react";

interface IValue {
  theme: string;
  toggleTheme: () => void;
}

// Создаем контекст
const ThemeContext = createContext<IValue>({
  theme: "light",
  toggleTheme: () => {}, // Пустая функция по умолчанию
});

// Создаем хук для удобного использования контекста
export const useTheme = () => useContext(ThemeContext);

// Создаем провайдер контекста
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value: IValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;