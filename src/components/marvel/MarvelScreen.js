import React from 'react';
import {HeroList} from "../heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <h3>Marvel</h3>
      <hr/>
      <HeroList publisher='Marvel Comics'/>
    </div>
  );
};
