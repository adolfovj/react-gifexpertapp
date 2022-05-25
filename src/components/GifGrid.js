import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {


  // const [ count, setCount ] = useState(0);

  // const [images, setImages] = useState([])


  // useEffect( () => {
  //   getGifs( category )
  //     .then( imgs => setImages( imgs ));
  // }, [ category ])



  // getGifs();

  const { data:images, loading } = useFetchGifs( category );


  return (
    <> 
      <h3 className='animate__animated animate__fadeIn'> { category } </h3>  
      { loading && <p className='animate__flash'> Loading </p> }  
      <div className="card-grid">
        {
          images.map( img => (
              <GifGridItem 
                key={ img.id }
                { ...img } 
              />
          ))
        }

          {/* <ol>
              {
                images.map( img => (
                  <li key= { img.id }> { img.title } </li>                
                ))
              }
          </ol> */}
      </div>
    </>
    
  )
}