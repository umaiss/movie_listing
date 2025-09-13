import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Theme from '../../theme/theme'
import Icon from 'react-native-vector-icons/Ionicons';
import { height, width } from '../../utils/dimensions'
import { SmallText } from '../text'

export const HomeHeader = () => {
    return (
        <View style={styles.maincontainer}>
            <SmallText size={5} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM}>Watch</SmallText>
            <Icon size={22} name='search' />

        </View>
    )
}

export const BookSeatHeader = ({ backHeader, title, subText }: any) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={backHeader}>
                <Icon style={styles.backArrow} name="chevron-back" size={30} color={Theme.color.COLOR_TEXT} />
            </TouchableOpacity>
            <View>
                <SmallText fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} textStyles={{ alignSelf: 'center' }} color={Theme.color.COLOR_TEXT} >{title}</SmallText>
                <SmallText size={3.3} textStyles={{ alignSelf: 'center' }} color={Theme.color.COLOR_PRIMARY_BUTTON} >{subText}</SmallText>
            </View>
            <View style={{ width: width(10) }} />
        </View>
    )
}


const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: Theme.color.COLOR_WHITE,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: "row",
        paddingHorizontal: height(3),
        paddingBottom: height(2),
        height: height(11)

    },
    header: {
        paddingTop: height(4),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Theme.color.COLOR_WHITE,
        height: height(12),
        // padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    backArrow: { left: width(3) },
})