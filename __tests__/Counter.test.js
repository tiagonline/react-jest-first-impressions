import React from 'React';
import { shallow } from 'enzyme';
import Counter from '../src/Counter';

describe('Testing Counter Component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(
            <Counter count={5} />
        );
        
        expect(wrapper).toMatchSnapshot();
        expect.setProps({ count:10 });
        expect(wrapper).toMatchSnapshot();        
    });
});