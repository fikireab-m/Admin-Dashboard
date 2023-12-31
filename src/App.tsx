import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/auth" element={<Auth />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App
