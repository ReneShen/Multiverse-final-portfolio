import React from 'react';
import './CoverPage.css'

function CoverPage(props)  {
  return (
    <div className="CoverPage">
      <div className='left-div'>
        <h1>
          CREATIVE PROGRAMMER
        </h1>
        <img alt="Rene Shen" src={require('../images/IMG_20210307_132942_725.jpg')} />
        <div >
          <img className='arrow-down-img' alt="arrow-down" src={require('../images/—Pngtree—vector forward icon_4184777.png')} />
        </div>
        
      </div>
      <div className='right-div'>
        <h1>
          RENE SHEN
        </h1>
      </div>
    </div>
  );
};

export default CoverPage;
