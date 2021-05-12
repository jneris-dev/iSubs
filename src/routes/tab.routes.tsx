import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-eva-icons';

import colors from '../styles/colors';

import { Home } from '../pages/Home';
import { Stats } from '../pages/Stats';
import { NewSub } from '../pages/NewSub';
import { Notifications } from '../pages/Notifications';
import { Settings } from '../pages/settings/Settings';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator tabBarOptions={{
            activeTintColor: colors.heading,
            inactiveTintColor: colors.placeholder,
            showLabel: false,
            style: {
                paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                height: Platform.OS === 'ios' ? 78 : 60,
            },
        }}>
            <AppTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ color }) => (
                        <View>
                            <Icon
                                name='grid-outline'
                                fill={color}
                                width={20}
                                height={20}
                            />
                        </View>
                    ))
                }}
            />
            <AppTab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarIcon: (({ color }) => (
                        <View style={{ right: 18 }}>
                            <Icon
                                name='pie-chart-outline'
                                fill={color}
                                width={20}
                                height={20}
                            />
                        </View>
                    ))
                }}
            />
            <AppTab.Screen
                name="NewSub"
                component={NewSub}
                options={{
                    tabBarIcon: (() => (
                        <View style={styles.button}>
                            <Icon
                                name='plus-outline'
                                fill='#FFF'
                                width={20}
                                height={20}
                            />
                        </View>
                    ))
                }}
            />
            <AppTab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: (({ color }) => (
                        <View style={{ left: 18 }}>
                            <Icon
                                name='bell-outline'
                                fill={color}
                                width={20}
                                height={20}
                            />
                        </View>
                    ))
                }}
            />
            <AppTab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: (({ color }) => (
                        <View>
                            <Icon
                                name='settings-outline'
                                fill={color}
                                width={20}
                                height={20}
                            />
                        </View>
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 35,
        backgroundColor: colors.red,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AuthRoutes;