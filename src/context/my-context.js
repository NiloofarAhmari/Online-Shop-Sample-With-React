import { createContext, useContext, useReducer} from 'react'
import { rootReducer } from './root-reducer'

const initState = {
  test: 'Context Test',
  products: [],
  product:{},
  num:[]
};

const MyContext = createContext();

export const MyContextProvider = ({ children }) =>{
  const [myState, dispatch] = useReducer(rootReducer, initState);

  return <MyContext.Provider value={ {myState, dispatch} }>{children}</MyContext.Provider>
}

export const useMyContext = () => useContext(MyContext);