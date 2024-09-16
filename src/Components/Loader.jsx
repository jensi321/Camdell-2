import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    },[1000])
    
  }, []);
  if (loading) {
  return (
    <div className='loder-outer'>
      <div className="loder-inner">
      <ClipLoader size={50} color="#A9D5B2" />
      </div>
      
    </div>
  );}
};

export default Loader;