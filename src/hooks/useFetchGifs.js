import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((img) =>
      // setTimeout(() => {
      //   setState({
      //     data: img,
      //     loading: false,
      //   });
      // }, 3000),

      setState({
        data: img,
        loading: false,
      }),
    );
  }, [categoria]);
  return state; // {data:[], loading:true}
};
