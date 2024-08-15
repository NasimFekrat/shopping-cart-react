import "./App.css";
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
        <Navbar />
        <Shop />
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
