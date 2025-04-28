import React from "react";
import HomePage from "./pages/HomePage/index";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage /> {/* Chama o componente Mario dentro do JSX */}
      <ToastContainer /> {}
    </div>
  );
}

export default App;
