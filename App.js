import React from 'react';

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './Screens/SearchScreen.js'
import MovieListScreen from './Screens/MovieListScreen.js'
import MovieInfoScreen from './Screens/MovieInfoScreen.js'
import ErrorScreen from './Screens/ErrorScreen.js'

const AppNavigator = createStackNavigator({
  SearchScreen: SearchScreen,
  MovieListScreen: MovieListScreen,
  MovieInfoScreen: MovieInfoScreen,
  ErrorScreen:ErrorScreen
},{
  initialRouteName: 'SearchScreen'
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
