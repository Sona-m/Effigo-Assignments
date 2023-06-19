import React, { forwardRef , useImperativeHandle } from 'react';

const Child = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
         childMethod }));

  const childMethod = () => {
    console.log('Child method called from parent component');
  };
   
  
  return <div ref={ref}>Child Component</div>;
});

export default Child;