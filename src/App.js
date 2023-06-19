import Child from './Child';
import React, { useRef } from 'react';
import { Provider } from './context';
import Children from './Children';

function App() {
  const childRef = useRef(null);    // create a ref to store the child component

  const handleClick = () => {
    childRef.current.childMethod();
  };


  return (
    <div>
      <button onClick={handleClick}>Call Child Method using ref</button>
      <Child ref={childRef} />
      <Provider >
       <Children />
      </Provider>
    </div>
  );
}

export default App;











