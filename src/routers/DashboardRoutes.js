import React from 'react';
import {Navbar} from "../components/ui/Navbar";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {HeroScreen} from "../components/heroes/HeroScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {SearchScreen} from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <Routes>
          <Route path='/heroApp-react/marvel' element={<MarvelScreen/>}/>
          <Route path='/heroApp-react/hero/:heroId' element={<HeroScreen/>}/>
          <Route path='/heroApp-react/dc' element={<DcScreen/>}/>
          <Route path='/heroApp-react/search' element={<SearchScreen/>}/>
          <Route path="/heroApp-react/*" element={<Navigate to="/marvel" replace />}
          />
        </Routes>
      </div>
    </>
  );
};
