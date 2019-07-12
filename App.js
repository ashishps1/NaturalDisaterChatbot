import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';

import ChatBot from './Components/Chatbot/ChatBot';
import Register from './Components/Register/Register';
import Connect from './Components/Connect/Connect';
import { Constants} from 'expo';
import { Icon } from 'react-native-elements'

const ChatBotRoute = () => (
  <ChatBot />
);

const RegisterRoute = () => (
  <Register />
);

const ConnectRoute = () => (
  <Connect />
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
    ],
  };

  render() {
    return (
      <React.Fragment>
      <Icon
        name='rowing' 
      />
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: ChatBotRoute,
          second: RegisterRoute,
          third: ConnectRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width}}
        style= {styles.container}
      />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
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
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },  
});