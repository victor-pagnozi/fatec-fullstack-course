import { Route, Routes } from "react-router-dom";
import { CreateProductPage } from "./pages/CreateProduct";
import { ProductsPage } from "./pages/Products";
import "./index.css";
import { Layout } from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/create" element={<CreateProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
