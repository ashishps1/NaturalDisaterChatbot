import React, { Component } from 'react';
import {
    View
} from 'react-native';
import MapView from 'react-native-maps';

import { Input, Button, CheckBox } from 'react-native-elements';

export default class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }    

    render() {
        return (
            <View>
                <MapView
                    style={{
                    flex: 1
                    }}
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                    }}
                />  
                <Input
                    placeholder='Write'
                />
                <Button
                    title="Post"
                />                                  
            </View>
        )
    }
}