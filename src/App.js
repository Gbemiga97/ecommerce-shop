import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, ProductDetails } from "./pages";
import { Footer, Header, SideBar } from "./components";


function App() {
  return (
    <div className="overflow-hidden">
     <HashRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
     </Routes>
     <SideBar />
     <Footer />
     </HashRouter>
    </div>
  );
}

export default App;
