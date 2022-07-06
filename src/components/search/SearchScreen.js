import React, {useMemo} from 'react';

import queryString from 'query-string';
import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {useNavigate,useLocation} from "react-router-dom";
import {GetHeroesByName} from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
  const navigate = useNavigate();
  let location = useLocation();

  // Parseo
  // npm install query-string
  const { q = '' } = queryString.parse(location.search);

  // CustomHook
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });
  const {searchText} = formValues;
  const heroesFiltered =  useMemo( ()=>GetHeroesByName(q),[q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <div>
      <h3>Buscar</h3>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Formulario de busqueda</h4>
          <hr/>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Busca a un heroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className='btn btn-danger w-100 mt-3'
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
          {
            (q==='')
            &&
              <div className="alert alert-info">
                Busca un heroe
              </div>
          }

          {
            (q !== '' && heroesFiltered.length === 0)
            &&
            <div className="alert alert-danger">
             No hay heroe con {q}
            </div>
          }

          {
            heroesFiltered.map(hero =>(
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
