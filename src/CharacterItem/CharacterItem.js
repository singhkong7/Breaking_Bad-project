import React from 'react';
import { Link } from 'react-router-dom';
const CharacterItem = ({ item }) => {
    
    return (
      <div className='card' >
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <Link className='card-back' to={`/${item.char_id}`}>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </Link>
        </div>
      </div>
    )
  }
  
  export default CharacterItem;
