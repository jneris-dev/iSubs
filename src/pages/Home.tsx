import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardSignature } from '../components/CardSignature';

import { Header } from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Home() {
    return (
        <SafeAreaView style={styles.constainer}>
            <Header />
            <View style={styles.wrapContent}>
                <View style={styles.boxTotal}>
                    <View style={styles.iconTotalBox}>
                        <Text style={styles.iconTotal}>😁</Text>
                    </View>
                    <View>
                        <Text style={styles.priceTotal}>R$ 80,70</Text>
                        <Text style={styles.descTotal}>Total gasto total p/ Mês</Text>
                    </View>
                    <Icon name='more-vertical' fill={colors.heading} style={styles.icon} />
                </View>
                <View style={styles.mySubs}>
                    <Text style={styles.mySubsText}>Suas assinaturas:</Text>
                    <View style={styles.mySubsWrapIcons}>
                        <Icon name='plus-circle' fill={colors.heading} style={styles.mySubsIcon} />
                        <Icon name='plus-circle' fill={colors.red} style={styles.mySubsIcon} />
                    </View>
                </View>
                <View style={styles.wrapCards}>
                    <CardSignature
                        title="netflix"
                        date="Mai 25, 11:00 am"
                        price="R$32,90"
                        cicle="mensal"
                    />
                    <CardSignature
                        title="crunchyroll"
                        date="Jan 03, 01:00 pm"
                        price="R$315,00"
                        cicle="anual"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background_light,
    },
    wrapContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
    },
    boxTotal: {
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 15,
        height: 90,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    iconTotalBox: {
        width: 45,
        height: 45,
        borderRadius: 30,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTotal: {
        fontSize: 20
    },
    priceTotal: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.green
    },
    descTotal: {
        fontSize: 13,
        fontFamily: fonts.text,
        color: colors.placeholder
    },
    icon: {
        width: 20,
        height: 25
    },
    mySubs: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mySubsText: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 15
    },
    mySubsWrapIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mySubsIcon: {
        width: 25,
        height: 25,
        marginLeft: -10,
    },
    wrapCards: {
        width: '100%',
        marginTop: 35
    }
})