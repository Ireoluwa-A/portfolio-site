import React, {useState} from 'react';

import '../styles/general.css';

const Loader = () => {
  // const [loadingAnim, setLoadingAnim] = useState(false)
  return (
    <div className='loading_container w-full h-screen flex justify-center items-center'>
        <div 
            className={`loading_box`}></div>
    </div>
  );
}

export default Loader;


