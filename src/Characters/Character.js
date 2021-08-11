import React from 'react'
import CharacterItem from '../CharacterItem/CharacterItem';
import Spinner from '../Spinner';
const Character=({isLoading,items})=> {
    return isLoading ?(<Spinner />): (
        <section className="cards">
            {
                
                items.map((item)=>(
                   
                   
                    <CharacterItem  key={item.char_id} item={item} />
                  
                    
                ) )
            }
        </section>
    )
}

export default Character
