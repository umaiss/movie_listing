import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { height, width } from '../../utils/dimensions';
import Theme from '../../theme/theme';
import { SmallText } from '../../components/text';
import { BookSeatHeader } from '../../components/header';
import Button from '../../components/button';
import { useNavigation, useRoute } from '@react-navigation/native';
import Seats from '../../assets/svgs/seats';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface SeatBookingDetailProps {
    route: {
        params: {
            movieTitle: string;
            showTime: string;
            hall: string;
            date: string;
        };
    };
}

const SeatBookingDetail = ({ route }: SeatBookingDetailProps) => {
    const { movieTitle, showTime, hall, date } = route.params;
    const navigation = useNavigation();
    const [zoomLevel, setZoomLevel] = useState(1);

    const renderSeatMap = () => {
        return (
            <View style={styles.seatMapContainer}>
                <View style={styles.seatMapWrapper}>
                    <Seats width={width(90)} height={height(50)} />
                </View>
            </View>
        );
    };

    const renderLegend = () => (
        <>
            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#FFD700' }]} />
                    <SmallText size={3.2} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_TEXT}>
                        Selected
                    </SmallText>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#CCCCCC', marginLeft: height(6) }]} />
                    <SmallText size={3.2} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_TEXT}>
                        Not available
                    </SmallText>
                </View>

            </View>

            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#8B5CF6' }]} />
                    <SmallText size={3.2} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_TEXT}>
                        VIP (150$)
                    </SmallText>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#3B82F6', marginLeft: height(5.5) }]} />
                    <SmallText size={3.2} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_TEXT}>
                        Regular (50$)
                    </SmallText>
                </View>

            </View>
        </>

    );

    return (
        <View style={styles.container}>
            <BookSeatHeader
                backHeader={() => navigation.goBack()}
                title={movieTitle}
                subText={`${date} | ${showTime} ${hall}`}
            />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Seat Map */}
                <View style={styles.seatMapWrapper}>
                    {renderSeatMap()}
                    <View style={styles.zoomControls}>
                        <TouchableOpacity
                            style={styles.zoomButton}
                            onPress={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                        >
                            <Icon name="add" size={20} color={Theme.color.COLOR_TEXT} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.zoomButton}
                            onPress={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                        >
                            <Icon name="remove" size={20} color={Theme.color.COLOR_TEXT} />
                        </TouchableOpacity>
                    </View>
                    {/* Zoom Controls */}
                    <View style={styles.screenCurve} />

                </View>

                {renderLegend()}
            </ScrollView>

            <View style={styles.bottomSection}>
                <View style={styles.priceContainer}>
                    <SmallText size={3.5} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_SUBTEXT}>
                        Total Price
                    </SmallText>
                    <SmallText size={4.5} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD} color={Theme.color.COLOR_TEXT}>
                        $ 50
                    </SmallText>
                </View>

                <Button
                    containerStyle={styles.proceedButton}
                    onPress={() => {
                        console.log('Proceed to payment');
                    }}
                >
                    <SmallText size={4} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD} color={Theme.color.COLOR_WHITE}>
                        Proceed to pay
                    </SmallText>
                </Button>
            </View>
        </View>
    );
};

export default SeatBookingDetail;