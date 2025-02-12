import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProductList from "../Components/ProductList";
import CardPage from "../Components/CardPage";
import WishlistPage from "../Components/WishlistPage";
import Order from "../Pages/Order";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/products" exact element={<ProductList />} />
      <Route path="/order" exact element={<ProtectedRoute role="buyer" element={<Order />} />} />
      <Route
        path="/admin"
        exact
        element={<ProtectedRoute role="admin" element={<AdminDashboard />} />}
      />
      <Route
        path="/seller"
        exact
        element={<ProtectedRoute role="seller" element={<SellerDashboard />} />}
      />
      <Route
        path="/buyer"
        exact
        element={<ProtectedRoute role="buyer" element={<BuyerDashboard />} />}
      />
      <Route
        path="/cart"
        exact
        element={<ProtectedRoute role="buyer" element={<CardPage />} />}
      />
      <Route
        path="/wishlist"
        exact
        element={<ProtectedRoute role="buyer" element={<WishlistPage />} />}
      />
    </Routes>
  );
};

export default Routers;
