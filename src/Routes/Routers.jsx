import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import ProtectedRoute from "../Components/ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
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
