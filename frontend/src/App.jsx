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

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* PROTECTED ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>

              <PortfolioPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>

              <AnalyticsPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/risk"
          element={
            <ProtectedRoute>

              <RiskPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>

              <SettingsPage />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;