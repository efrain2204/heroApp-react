import React, {useMemo} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const {heroId} = useParams();
  const hero = useMemo(()=> getHeroById(heroId),[heroId]);

  const navigate = useNavigate();

  if(!hero){
    return <Navigate to="/"  />
  }
  const handleReturn = () => {
    navigate(-1);
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego: </b>{alter_ego} </li>
          <li className='list-group-item'> <b>Publisher: </b>{publisher} </li>
          <li className='list-group-item'> <b>First appearance: </b>{first_appearance} </li>
        </ul>
        <h5>Characters</h5>
        <p> {characters}</p>
        <button
          onClick={handleReturn}
          className='btn btn-outline-primary'
        >
          Return
        </button>

      </div>
    </div>
  );
};
