import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Footer from "./components/footer";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/#/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
