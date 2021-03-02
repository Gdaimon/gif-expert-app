import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Samurai X']);

  /*
  const handleAdd = () => {
    const nombre = 'Batman';
    // setCategories([...categories, nombre]);
    setCategories((cats) => [...categories, nombre]);
  };
  */
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      {categories.map((categoria) => (
        // <li key={categoria}>{categoria}</li>
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};

export default GifExpertApp;
