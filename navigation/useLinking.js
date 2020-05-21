import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Main: 'main',
          Cards: 'cards',
          ReferenceGuide: 'referenceGuide',
          Balancing: 'balancing',
          Links: 'links',
        },
      },
    },
  });
}
