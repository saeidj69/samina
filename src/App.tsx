import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { useTranslation } from 'react-i18next';
import { Home } from "./pages/Home";
import Login from "./pages/Login";
function App() {
  
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route></Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
