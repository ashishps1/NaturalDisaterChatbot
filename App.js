import React, { Component } from 'react';
import {
  View,
  Keyboard,
  Dimensions,
  Platform,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from './env';

import Expo from 'expo';

let window = Dimensions.get('window');
const contentHeight = window.height - 80;
const avatarBot = "https://i.imgur.com/7k12EPD.png";

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/7k12EPD.png'
};

class App extends Component {
  static navigationOptions = {
    title: 'ChatBot'
  }

  constructor(props) {
    super(props);
    this.state = { messages: [], answers: [], height: contentHeight };
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );    
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    Expo.Speech.stop();
  }

  _keyboardDidShow = (e) => {
    this.setState({ height: contentHeight - e.endCoordinates.height});
  }

  _keyboardDidHide = (e) => {
    this.setState({ height: contentHeight });
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hi! How may I help you with today?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Botler',
            avatar: avatarBot,
          },
        },
      ],
    })
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  renderChat = () => {
    return(
        <GiftedChat
          textInputProps={{autoFocus: true}}
          messages={this.state.messages}
          placeholder='Ask me anything...'
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
    );
  }

  render() {
    if(Platform.OS === 'ios'){
      return this.renderChat();
     }
    else{
       return(
        <View style={{ height: this.state.height }}>
           { this.renderChat() }
        </View>
      )
    }
  }
}

export default App;