import React from 'react';
import { shallow } from 'enzyme';
import CardScreen from '../CardScreen';

describe('<CardScreen>', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(<CardScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
