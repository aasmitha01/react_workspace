import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import customerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute role="admin">
            <AdminDashboard/>
          </ProtectedRoute>
        }
        />
        <Route path="/customers/dashboard" element={
          <ProtectedRoute role="customer">
            <customerDashboard/>
          </ProtectedRoute>
        }
        />
        </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}