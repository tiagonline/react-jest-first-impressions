// estrutura para utilizar o redux
import { createStore, combineReducers } from 'redux';
import todos from './reducers';

const store = createStore(combineReducers({todos}));

export default store;

//estudar como  criar reduz dentro de react