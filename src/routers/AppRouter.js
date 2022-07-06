import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";

import {LoginScreen} from "../components/login/LoginScreen";
import {DashboardRoutes} from "./DashboardRoutes";
import {PublicRoute} from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/heroApp-react/login"
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
              }
          />
          <Route
            path='/heroApp-react/*'
            element={
              <PrivateRoute >
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
