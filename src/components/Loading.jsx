import React from 'react';

const loading = () => {
  return (
    <div style={{position:"absolute",inset:0,background:"white"}}>
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-max-1mb.gif" alt="..." style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        </div>
    </div>
  )
};

export default loading;
