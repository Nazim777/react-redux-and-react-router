import {rootreducer} from './Reducer/index'
import { createStore } from 'redux'
export const store2 =createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


);