import React, { Component } from 'react';

import {
  AppRegistry,
  Platform
} from 'react-native';

import Routes from './src/Routes';
import {name as appName} from './app.json';

  AppRegistry.registerComponent(name, () => App);
if (Platform.OS === 'web') {
      AppRegistry.runApplication(appName, {
           rootTag: document.getElementById('root'),
       });
  }
export default class App extends Component   {
 
  render() {
    return (
      <View>
       <Routes/>
      </View>
    );
  }
}

