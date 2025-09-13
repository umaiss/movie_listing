import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
    FlatList,
    ScrollView,
    TouchableOpacity,
    View
} from "react-native";
import Seats from "../../assets/svgs/seats";
import Button from "../../components/button";
import { BookSeatHeader } from "../../components/header";
import { SmallText } from "../../components/text";
import { RootStackParamList } from "../../navigation/types/RootParamList";
import Theme from "../../theme/theme";
import { height } from "../../utils/dimensions";
import styles from "./styles";

const dates = ["5 Mar", "6 Mar", "7 Mar", "8 Mar", "9 Mar", "10 Mar", "11 Mar"];
const showtimes = [
    { id: 1, time: "12:30", hall: "Cinetech + Hall 1", price: 50 },
    { id: 2, time: "13:30", hall: "Cinetech + Hall 2", price: 75 },

];

export default function SeatBooking() {
    const [selectedDate, setSelectedDate] = useState("5 Mar");
    const [selectedShow, setSelectedShow] = useState(showtimes[0]);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>

            <BookSeatHeader backHeader={() => { navigation.goBack() }} title={"The King’s Man"} subText={"In theaters december 22, 2021"} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <SmallText textStyles={styles.sectionTitle} color={Theme.color.COLOR_TEXT} size={4} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} >Date</SmallText>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.dateScroll}
                >
                    {dates.map((date) => (
                        <TouchableOpacity
                            key={date}
                            style={[
                                styles.dateButton,
                                selectedDate === date && styles.dateButtonActive,
                            ]}
                            onPress={() => setSelectedDate(date)}
                        >
                            <SmallText color={selectedDate === date ? Theme.color.COLOR_WHITE : Theme.color.COLOR_TEXT} size={3.6} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} >{date}</SmallText>

                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Showtime Cards */}
                <View style={styles.showtimeContainer}>
                    <FlatList
                        data={showtimes}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.time}
                        renderItem={({ item: show }) => (
                            <View style={styles.seatsMainView}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: height(0.3) }}>
                                    <SmallText size={3.7} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} color={Theme.color.COLOR_TEXT}>{show.time}</SmallText>
                                    <SmallText size={3.7} textStyles={styles.hallText} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_SUBTEXT}>{show.hall}</SmallText>
                                </View>

                                <TouchableOpacity
                                    style={[
                                        styles.showtimeCard,
                                        selectedShow.time === show.time && styles.showtimeCardActive,
                                    ]}
                                    onPress={() => setSelectedShow(show)}
                                >
                                    <Seats width={200} height={100} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: height(0.5) }}>
                                    <SmallText color={Theme.color.COLOR_SUBTEXT}>From </SmallText>
                                    <SmallText color={Theme.color.BLACK} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD}>${show.price} </SmallText>
                                    <SmallText color={Theme.color.COLOR_SUBTEXT}>or </SmallText>
                                    <SmallText color={Theme.color.BLACK} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD}>{show.price * 50} bonus</SmallText>
                                </View>

                            </View>
                        )}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </View>
            </ScrollView>

            <Button containerStyle={styles.selectButton} onPress={() => {
                navigation.navigate('SeatBookingDetail', {
                    movieTitle: 'The King\'s Man',
                    showTime: selectedShow.time,
                    hall: selectedShow.hall,
                    date: selectedDate
                });
            }}>
                <SmallText color={Theme.color.COLOR_WHITE} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD}>Select Seats</SmallText>
            </Button>

        </View>
    );
}

