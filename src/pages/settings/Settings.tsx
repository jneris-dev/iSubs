import Gravatar from '@krosben/react-native-gravatar';
import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-eva-icons';

import { Header } from '../../components/Header';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Settings() {
    return (
        <View style={styles.container}>
            <Header title="Configurações" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <Gravatar email="site@jneris.com.br" size={250} defaultImage="retro" style={{ borderRadius: 125 }} />
                </View>
                <Text style={styles.name}>João Neris</Text>
                <Text style={styles.mail}>jneris@email.com</Text>
                <View style={styles.menu}>
                    <View style={styles.menuItem}>
                        <Icon
                            name='edit-outline'
                            fill={colors.placeholder}
                            style={styles.icon}
                        />
                        <Text style={styles.menuLink}>Editar conta</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Icon
                            name='lock-outline'
                            fill={colors.placeholder}
                            style={styles.icon}
                        />
                        <Text style={styles.menuLink}>Impressão digital</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Icon
                            name='globe-2-outline'
                            fill={colors.placeholder}
                            style={styles.icon}
                        />
                        <Text style={styles.menuLink}>Moeda</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Icon
                            name='file-outline'
                            fill={colors.placeholder}
                            style={styles.icon}
                        />
                        <Text style={styles.menuLink}>Política de privacidade</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Icon
                            name='alert-circle-outline'
                            fill={colors.placeholder}
                            style={styles.icon}
                        />
                        <Text style={styles.menuLink}>Sobre</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    content: {
        flex: 1,
        marginTop: 64,
        width: '100%',
        paddingHorizontal: 30,
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: fonts.heading,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 21,
        color: colors.heading,
    },
    mail: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.placeholder,
        marginTop: 8,
        textAlign: 'center',
    },
    menu: {
        marginTop: 61,
        width: '100%',
        justifyContent: 'flex-start'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    menuItem: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuLink: {
        fontFamily: fonts.heading,
        fontSize: 13,
        color: colors.heading,
    }
})