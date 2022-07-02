import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "../src/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing></Routing>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
