import { useContext } from "react";
import ThemeContext from "./Context";


function MyComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }

  export default MyComponent;