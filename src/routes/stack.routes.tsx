import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoutes from './tab.routes';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/security/Login';
import { Register } from '../pages/security/Register';
import { Home } from '../pages/Home';
import { SubSingle } from '../pages/SubSingle';
import { Stats } from '../pages/Stats';
import { NewSub } from '../pages/NewSub';
import { Notifications } from '../pages/Notifications';
import { Settings } from '../pages/settings/Settings';

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
            component={AuthRoutes}
        />
        <stackRoutes.Screen
            name="SubSingle"
            component={SubSingle}
        />
        <stackRoutes.Screen
            name="Stats"
            component={AuthRoutes}
        />
        <stackRoutes.Screen
            name="NewSub"
            component={NewSub || AuthRoutes}
        />
        <stackRoutes.Screen
            name="Notifications"
            component={AuthRoutes}
        />
        <stackRoutes.Screen
            name="Settings"
            component={AuthRoutes}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;