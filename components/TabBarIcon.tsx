import { Feather } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

const TabBarIcon = (props) => {
  const { name, focused } = props;
  const tabIconColor = focused ? Colors.tabIconSelected : Colors.tabIconDefault;

  return (
    <Feather
      name={name}
      size={30}
      strokeWidth={1}
      style={{ marginBottom: -3 }}
      color={tabIconColor}
    />
  );
};

export default TabBarIcon;
