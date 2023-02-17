import React from 'react';
import './CoverPage.css'

function CoverPage() {
  return (
    <div className="cover-page">
      <div className='wrapper'>
      <div className='left-div'>
        <h1 className='large-font'>
          RENE SHEN
        </h1>
        <img className='portrait-img' alt="Rene Shen" src={require('../images/IMG_20210307_132942_725.jpg')} />
        <div >
          <div className='dot-wrapper'>
            <div className='bouncing-dot' />
          </div>
          {/* <img className='arrow-down-img' alt="arrow-down" src={require('../images/—Pngtree—vector forward icon_4184777.png')} /> */}
        </div>
        
      </div>
      <div className='right-div'>
        <h5 className='sub-title'>
          A former baker, current full-stack software engineer
        </h5>
        <h5>
          I’m used to learning fast under high-pressure-environment, and am looking to collaborate and assist in developing and modifying websites and user interfaces
        </h5>
        <p className='large-font '>
          CREATIVE 
          <br />
          PROGRAMMER
        </p>
      </div>
      </div>
    </div>
  );
};

export default CoverPage;
