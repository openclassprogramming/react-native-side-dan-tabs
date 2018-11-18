import React, { } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, DrawerActions } from "react-navigation";
import { TouchableOpacity, Image } from 'react-native'

// TABS
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

const TabHomeNav = createMaterialTopTabNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: () => <Image source={require('.././assets/icon/home.png')} style={{ width: 20, height: 20 }} />,
        },
    },
    Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: 'Grup',
            tabBarIcon: () => <Image source={require('.././assets/icon/group.png')} style={{ width: 20, height: 20 }} />,
        },
    },
    Tab3: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: 'Informasi',
            tabBarIcon: () => <Image source={require('.././assets/icon/promotion.png')} style={{ width: 20, height: 20 }} />,
        }
    },
}, {
        initialRouteName: 'Tab1',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                height: 60,
                backgroundColor: '#012E52',
                borderBottomColor: '#FF7043',
            },
            tabStyle: {
                borderBottomColor: '#FF7043'
            },
            indicatorStyle: {
                backgroundColor: '#FF7043'
            },
            showIcon: true,
            showLabel: true,
        },
    })

const DashboardApp = createStackNavigator({
    Home: {
        screen: TabHomeNav,
        navigationOptions: {
            title: 'Open Class Programming',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#012E52',
                elevation: 0
            },
            headerTitleStyle: {
                fontSize: 16,
                fontFamily: 'sans-serif'
            },
            headerLeft: (
                <TouchableOpacity
                    onPress={() => this._openDrawer()}
                >
                    <Image source={require('.././assets/icon/menu.png')} style={{ width: 20, height: 20, marginLeft: 18 }} />
                </TouchableOpacity>
            ),
        }
    },
}, {
        // initialRouteName: 'Yaumiyah', //  Dev
        initialRouteName: 'Home',  //  Prod
    })

module.exports = DashboardApp