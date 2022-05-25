// =================================== libraries
import React, { useState } from 'react'
import { GitExpertApp } from '../GitExpertApp';
import PropTypes from 'prop-types';
 
// =================================== Compoente
// Recibe el valor setCategories
export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState(''); // Si esta vacio es undefined

   const handleInputChange = (e) =>{
    //    console.log(e.target.value);
       setInputValue(e.target.value);
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    
    //console.log('Submit hecho')
    if( inputValue.trim().length > 2) {
        // Adicionando el nuevo valor al arreglo!!!
         setCategories( ( cats => [ inputValue, ...cats ] ) );
         setInputValue('');
    }
   }

  return (
    //  Para prevenir el refresh del navegador onSubmit={ handleSubmit }
    <form onSubmit={ handleSubmit }> 
        {/* <h1> {inputValue} </h1> */}
        <input 
            type="text"
            value={ inputValue }
            // onChange={ (e) => console.log(e)}
            onChange={ handleInputChange }
        />
    </form>
  )

}

// =================================== Proptypes

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}   