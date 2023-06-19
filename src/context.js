import { createContext } from "react";

const context = createContext(null);

function Provider({ children}) {

    const childMethod = () => {
        console.log('Child method called from parent component');
    }
   

    return <context.Provider value={{childMethod}}>{children}</context.Provider>;
}

export {Provider};
export default context;