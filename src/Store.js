import { createStore } from "redux";
import {rootreducer} from './Reducer/index'
export const store = createStore(rootreducer);
