import React, {useContext} from 'react';

import {Navigate, Route} from "react-router-dom";
import {AuthContext} from "../auth/AuthContext";


export const PublicRoute = ( {
  children
}) => {
  const {user} = useContext(AuthContext);

  return (
    (!user.logged)
      ? children
      : <Navigate to="/marvel"/>
  );
};

