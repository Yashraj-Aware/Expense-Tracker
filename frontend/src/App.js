import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {

  const {user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Dashboard />: <Navigate to="/login"/>} />
            <Route path="/dashboard" element={user ? <Dashboard />: <Navigate to="/login"/>} />
            <Route path="/income" element={user ? <Income />: <Navigate to="/login"/>} />
            <Route path="/expense" element={user ? <Expense />: <Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <Login />: <Navigate to="/"/>} />
            <Route path="/signup" element={!user ? <Signup />: <Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
