import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ArticlesList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
