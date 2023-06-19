import React , {useContext} from 'react';
import context from './context';

const Children = () => {
    const {childMethod} = useContext(context);
    
    const childMethodCall = () => {
        childMethod();
    }
  return (
    <div>
        <button onClick={childMethodCall}>Call Child Method using context</button>
    </div>
  )
}

export default Children