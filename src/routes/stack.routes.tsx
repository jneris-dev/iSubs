import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { Home } from '../pages/Home';
import { SubSingle } from '../pages/SubSingle';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen
            name="Login"
            component={Login}
        />
        <stackRoutes.Screen
            name="Register"
            component={Register}
        />
        <stackRoutes.Screen
            name="Home"
            component={Home}
        />
        <stackRoutes.Screen
            name="SubSingle"
            component={SubSingle}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;