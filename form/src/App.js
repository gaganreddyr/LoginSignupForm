import React from "react";
import { BrowserRouter } from "react-router-dom";
import Page from "./pages/Page";
import Theme from "./hooks/Themehook";

function App() {
  Theme();

  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;