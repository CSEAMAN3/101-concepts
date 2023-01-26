import "./Reset.css";
import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { itemData } from "./itemData";

function App() {
  const [item, setItem] = useState({});

  const getRandomItem = (arr) => {
    const randomItem = Math.floor(Math.random() * arr.length);
    const item = arr[randomItem];
    setItem(item);
  };

  const handleClick = () => {
    getRandomItem(itemData);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} item={item} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
