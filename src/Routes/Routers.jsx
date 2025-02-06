import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProductList from "../Components/ProductList";
import CardPage from "../Components/CardPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={
      <Login />
      } />
      <Route path="/cart" exact element={ <CardPage />
        // <ProtectedRoute role="buyer" component={CardPage} />
      } />
      <Route path="/products" exact element={<ProductList />} />
      <Route
        path="/admin"
        exact
        element={
          <ProtectedRoute role="admin" component={AdminDashboard} />
        }
      />
      <Route
        path="/seller"
        exact
        element={
          <ProtectedRoute role="seller" component={SellerDashboard} />
        }
      />
      <Route
        path="/buyer"
        exact
        element={
          <ProtectedRoute role="buyer" component={BuyerDashboard} />
        }
      />
    </Routes>
  )
}

export default Routers
