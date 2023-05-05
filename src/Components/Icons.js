import React from 'react';

const Icons = ({ data }) => (
  <div className='icons-center'>
    <div className='main-content-icons-div'>
      {data.map((item, index) => (
        <div className="icon-bodies" key={index}>
          <img alt={item.name} src={item.src} className="w-12" />
          <h4 className="text-md ml-4">{item.name}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default Icons;
