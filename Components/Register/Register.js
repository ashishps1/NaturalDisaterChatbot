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
                    placeholder='Contact Number'
                />                
                <Input
                    placeholder='Address'
                />       
                <Button
                    title="Locate Me"
                />       
                <CheckBox
                    title='Shelter'
                    checked={false}
                />
                <CheckBox
                    title='Food'
                    checked={false}
                />
                <CheckBox
                    title='Clothes'
                    checked={false}
                />  
                <Button
                    title='Submit'
                />                               
            </View>
        )
    }
}