import React from 'React';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Testing App Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });
});


//Shallow Rendering
//O shallow rendering renderiza apenas o componente, sem seus componentes filhos. 
//Então, caso você mude algo em um componente filho, isso não irá modificar a renderização rasa 
//(traduzindo para o português) do seu componente. Ou um bug, que seja introduzido em algum componente filho, 
//não irá quebrar seus testes. E também, não necessita de nenhum pedaço do DOM.
