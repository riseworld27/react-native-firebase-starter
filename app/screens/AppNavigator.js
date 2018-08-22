import {
  StackNavigator,
} from 'react-navigation';

import Movies from './Movies';
import Comment from './Comment';

const MainNavigator = StackNavigator(
  {
    movies: { screen: Movies},
    comment: { screen: Comment }
  },
  {
    headerMode: 'screen',
  },
);

export default MainNavigator;
