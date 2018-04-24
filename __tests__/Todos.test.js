import React from 'React';
import { shallow } from 'enzyme';
import Todos from '../src/Todos';

// mock o estado do redux
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

//cria estado inicial de todos mockados
const initialState = {
    todos : [
        {id: 0, text: 'Fazer café'},
        {id: 1, text: 'Fazer xá'},
        {id: 2, text: 'Fazer chocolate'},
    ],
};  

const store = mockStore(initialState);

describe('Testing Todos Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Todos/>,
            { context: {store} }
        ).dive();
        //Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result.
        
        expect(wrapper).toMatchSnapshot();   
    });
});