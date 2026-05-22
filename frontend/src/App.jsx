import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/Landing/LandingPage";

import LoginPage from "./pages/Login/LoginPage";

import RegisterPage from "./pages/Register/RegisterPage";

import PortfolioPage from "./pages/Portfolio/PortfolioPage";

import AnalyticsPage from "./pages/Analytics/AnalyticsPage";

import SettingsPage from "./pages/Settings/SettingsPage";

import RiskPage from "./pages/Risk/RiskPage";

import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Portfolio */}
        <Route
          path="/portfolio"
          element={<PortfolioPage />}
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />

        {/* Risk Analysis */}
        <Route
          path="/risk"
          element={<RiskPage />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<SettingsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;