import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { Input, Button, CheckBox } from 'react-native-elements';

export default class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }    

    render() {
        return (
            <View>
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