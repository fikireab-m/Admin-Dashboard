import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/auth" element={<Auth />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App
