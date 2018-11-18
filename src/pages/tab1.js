import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class Tab1 extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        _openDrawer = () => {
            this.props.navigation.toggleDrawer();
        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="#012E52"
                    barStyle="light-content"
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'sans-serif-medium' }}>Home</Text>
                </View>
            </View>
        );
    }
}

module.exports = Tab1