import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tab2 extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'sans-serif-medium' }}>Grup</Text>
                </View>
            </View>
        );
    }
}

module.exports = Tab2