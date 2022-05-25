
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

 export const GitExpertApp = (  ) => {

  // const categories = ['One Punch', 'Samurai X', 'Naruto'];

  const [categories, setCategories] = useState( ['One Peace'] );
  // const handleAdd = () => {
  //   // setCategories( ...categories, 'Hunterx' );
  //   setCategories( cats => [...cats, 'HunterX'] );
  // }

  return (
    <>
        <h2>GitExpertApp</h2>
        {/* le estoy enviando un valor a AddCategory */}
        <AddCategory setCategories={ setCategories } />
        <hr />

        {/* <button onClick= { handleAdd }>Agregar</button> */}

        <ol>
          {
            categories.map( category => (
              // return (<li key = { category }> { category } </li>)                
                <GifGrid 
                  key = { category }
                  category={ category } 
                />
              ))
          }
        </ol>
    </>
  )
}



