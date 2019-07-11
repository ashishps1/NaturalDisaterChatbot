import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';
import ChatBot from './Components/Chatbot/ChatBot';
import { Constants } from 'expo';

const ChatBotRoute = () => (
  <ChatBot />
);

const RegisterRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ConnectRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const BlogRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Chatbot' },
      { key: 'second', title: 'Register' },
      { key: 'third', title: 'Connect' },
      { key: 'fourth', title: 'Blogs' },      
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: ChatBotRoute,
          second: RegisterRoute,
          third: ConnectRoute,
          fourth: BlogRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },  
});