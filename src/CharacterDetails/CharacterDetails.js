import React from 'react';
import Spinner from "../Spinner";
import "./CharacterDetails.scss";
const CharacterDetails=({isLoading,details})=> {
  return isLoading ?(<Spinner />):
    (
      (
        <div className="details">
            <img src={details.img} alt='' />
            <div className="details__content">
              <h1 style={{color:"gray"}}>{details.name}</h1>
              <ul style={{color:"gray"}}> 
                <li>
                  <strong>{details.name} portrays: </strong> {details.portrayed}
                </li>
                <li>
                  <strong>Nickname:</strong>  {details.nickname}
                </li>
                <li>
                  <strong>Birthday:</strong> {details.birthday}
                </li>
                <li>
                  <strong>Status:</strong> {details.status}
                </li>
                <li>
                  <strong>Occupation:</strong> {details.occupation}
                </li>
                <li>
                  <strong>Appearance in the show:</strong> {details.appearance}
                </li>
              </ul>
            </div>
        </div>
    )
    )
}

export default CharacterDetails
