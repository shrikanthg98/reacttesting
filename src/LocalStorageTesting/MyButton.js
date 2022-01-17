import React from 'react';
import { writeStorage } from '@rehooks/local-storage';

let counter = 0;

 const MyButton = () => (
  <button onClick={_ => writeStorage('i', ++counter)}>
    Click Me
  </button>
);

export default MyButton;