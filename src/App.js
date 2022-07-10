import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "../src/App.css";
import ProductsContextProvider from "./context/productsContext";
import CartContextProvider from "./context/cartContext";
import FavouriteContextProvider from "./context/favouriteContext";
import "./media.css";

function App() {
  return (
    <FavouriteContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </CartContextProvider>
    </FavouriteContextProvider>
  );
}

export default App;
