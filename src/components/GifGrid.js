// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
  // const [count, setCount] = useState(0);
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getGifs(categoria).then(setImages);
  // }, [categoria]);

  // Custom Hooks
  const { data: images, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}

        {/* <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Adicionar
      </button> */}
      </div>
    </>
  );
};
