import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, AsyncStorage } from 'react-native';

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                { menu: 'Activity Stream' },
            ]
        }
    }

    _menuAct(act) {
        switch (act) {
            case 'home':
                this.props.navigation.navigate('Tab1');
                this.props.navigation.closeDrawer();
                break;
            case 'grup':
                this.props.navigation.navigate('Tab2');
                break;
            case 'info':
                this.props.navigation.navigate('Tab3');
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 160, backgroundColor: '#012E52' }}>
                    <View style={{
                        flex: 1,
                        paddingTop: 30,
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#012E52'
                    }}>
                        <Image source={require('.././assets/icon/student.png')} style={{ width: 70, height: 70, marginBottom: 10 }} />
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Open Class Programming</Text>
                    </View>
                </View>
                <FlatList
                    style={{ marginLeft: 20, marginTop: 40, marginRight: 20 }}
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.menu}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this._menuAct('home')}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#ffffff' }}>
                                        <View style={{ flex: 2, alignItems: 'center' }} >
                                            <Image source={require('.././assets/icon/home.png')} style={{ width: 20, height: 20, marginBottom: 10, marginTop: 10 }} />
                                        </View>
                                        <View style={{ flex: 5 }} >
                                            <Text style={{ fontWeight: 'bold', fontFamily: 'sans-serif', color: '#012E52' }}>Home</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this._menuAct('grup')}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#ffffff' }}>
                                        <View style={{ flex: 2, alignItems: 'center' }} >
                                            <Image source={require('.././assets/icon/group.png')} style={{ width: 20, height: 20, marginBottom: 10, marginTop: 10 }} />
                                        </View>
                                        <View style={{ flex: 5 }} >
                                            <Text style={{ fontWeight: 'bold', fontFamily: 'sans-serif', color: '#012E52' }}>Grup</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this._menuAct('info')}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#ffffff' }}>
                                        <View style={{ flex: 2, alignItems: 'center' }} >
                                            <Image source={require('.././assets/icon/promotion.png')} style={{ width: 20, height: 20, marginBottom: 10, marginTop: 10 }} />
                                        </View>
                                        <View style={{ flex: 5 }} >
                                            <Text style={{ fontWeight: 'bold', fontFamily: 'sans-serif', color: '#012E52' }}>Informasi</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}

module.exports = Menu
