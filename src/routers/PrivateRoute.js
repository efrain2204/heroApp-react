import React, {useContext} from 'react';

import {Navigate, Route, useLocation} from "react-router-dom";
import {AuthContext} from "../auth/AuthContext";


export const PrivateRoute = ( {
  children
}) => {
  const {user} = useContext(AuthContext);
  const location = useLocation()
  localStorage.setItem('lastPath',location.pathname)

  return (
        (user.logged)
          ? children
          : <Navigate to="/heroApp-react/login"/>
  );
};

