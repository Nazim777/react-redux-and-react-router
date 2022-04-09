import { createStore } from "redux";
import {rootreducer} from './Reducer/index'
export const store = createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
