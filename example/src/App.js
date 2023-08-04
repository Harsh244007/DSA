import React, { useReducer, createContext, useContext } from "react";

// Reducer function
const reducer = (state, action) => {
  console.log(state, action, "before");
  switch (action) {
    case "INCREMENT":
      console.log(state, action, "after");
      return { count: state.count + 1 };
    case "DECREMENT":
      if (state.count > 0) {
        console.log(state, action, "after");
        return { count: state.count - 1 };
      } else {
        alert("decerement value is false");
        return { count: 0 };
      }
    default:
      console.log(state, action, "after");
      return state;
  }
};

const App1 = React.memo(({ children }) => {
  console.log("renderd app1");
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch("INCREMENT");
  };

  const handleDecrement = () => {
    dispatch("DECREMENT");
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {children()}
    </div>
  );
});

const App2 = React.memo(({ children, ThemeContext }) => {
  // Initializing state using useReducer
  console.log("renderd app2");
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleIncrement = () => {
    dispatch("INCREMENT");
  };

  const handleDecrement = () => {
    dispatch("DECREMENT");
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
});
const App = () => {
  // Initializing state using useReducer
  console.log("renderd mainapp");
  const ThemeContext = createContext();

  const themeReducer = (state, action) => {
    switch (action) {
      case "TOGGLE_THEME":
        return state === "light" ? "dark" : "light";
      default:
        return state;
    }
  };
  const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, "light");
    const toggleTheme = () => {
      dispatch("TOGGLE_THEME");
    };
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  function MyComponent() {
    return <div>jbhsadd</div>;
  }
  return (
    <ThemeProvider>
      <>
        <div className="jbhax"></div>
        <div className="jbhax2"></div>
      </>
      <div className="subroot">
        {
          console.log(<MyComponent />)
          // console.log(MyComponent())
        }
        <App1 key="app1" ThemeContext={ThemeContext}>
          {() => <App2 key="app2" ThemeContext={ThemeContext}></App2>}
        </App1>
      </div>
    </ThemeProvider>
  );
};

export default App;
