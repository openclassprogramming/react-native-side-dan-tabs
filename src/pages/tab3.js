import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tab3 extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'sans-serif-medium' }}>Informasi</Text>
                </View>
            </View>
        );
    }
}

module.exports = Tab3