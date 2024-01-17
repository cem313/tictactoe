import React, { useState } from 'react'

let x = <div className='big-text x'>X</div>
let o = <div className='big-text o'>O</div>

function Square({ value, clickHandler }) {
  return (
    <div
      onClick={clickHandler}
      className="square"
    >
      {value === "" ? "" : value === "X" ? x : o}
    </div>
  );
}

export default Square