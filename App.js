/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Player from './src/components/player';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Player />
      </Provider>
    );
  }
}
