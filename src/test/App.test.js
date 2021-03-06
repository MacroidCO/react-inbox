import React from 'react';
import App from '../components/App';
import { shallow } from 'enzyme'
import MessageList from '../components/MessageList.container';
import Toolbar from '../components/Toolbar.container';

describe('app tests', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />)

        expect(app.find(MessageList)).toHaveLength(1)
        expect(app.find(Toolbar)).toHaveLength(1)
    });
})
