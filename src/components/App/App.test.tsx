import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('modal window can be closed', () => {
  const wrapper = mount((
    <App />
  ));
  expect(wrapper.find('Modal').children().exists()).toEqual(true);
  wrapper
    .find('ModalControls')
    .find('button')
    .filter({ color: '#ff594f' })
    .simulate('click');
  expect(wrapper.find('Modal').children().exists()).toEqual(false);
});

it('items can be filtered', () => {
  const wrapper = mount((
    <App />
  ));
  expect(wrapper.find('ItemGroup').find('li').length).toEqual(12);
  wrapper
    .find('ItemFilters')
    .findWhere(n => n.type() === 'span' && n.text() === 'Open')
    .simulate('click');
  expect(wrapper.find('ItemGroup').find('li').length).toEqual(8);
});
