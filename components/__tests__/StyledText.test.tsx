import * as React from 'react';
import { shallow } from 'enzyme';
import { MonoText } from '../StyledText';

describe('<MonoText>', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<MonoText>Snapshot test!</MonoText>);
      expect(component).toMatchSnapshot();
    });
  });
});
