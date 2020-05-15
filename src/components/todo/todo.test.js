import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Todo from './todo';

Enzyme.configure({adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todo/>, div);
    ReactDOM.unmountComponentAtNode(div);
});