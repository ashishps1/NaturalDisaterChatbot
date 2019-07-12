import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { Input, Button, CheckBox } from 'react-native-elements';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }    

    render() {
        return (
            <View>
                <Input
                    placeholder='Name'
                />
                <Input
                    placeholder='Contact'
                />                
                <Input
                    placeholder='Address'
                />       
                <Button
                    title="Locate Me"
                />       
                <CheckBox
                    title='Shelter'
                    checked={true}
                />
                <CheckBox
                    title='Food'
                    checked={true}
                />
                <CheckBox
                    title='Clothes'
                    checked={true}
                />                                  
            </View>
        )
    }
}