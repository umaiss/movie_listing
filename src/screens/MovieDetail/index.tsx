import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useGetMovieVideosQuery, useMovieDetailQuery } from "../../redux/authApi/authApi";
import { IMAGE_BASE_URL } from "../../utils/constant";
import { height, width } from "../../utils/dimensions";
import Theme from "../../theme/theme";
import moment from "moment";
import { SmallText } from "../../components/text";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types/RootParamList";
import styles from "./styles";

type MovieDetailProps = NativeStackScreenProps<RootStackParamList, 'MovieDetail'>;

export default function MovieDetail({ route }: MovieDetailProps) {
    const { data: movieDetail, isLoading: movieDetailLoading } = useMovieDetailQuery(route?.params?.id);
    const { data: movieVideo, isLoading: movieVideoLoading } = useGetMovieVideosQuery(route?.params?.id);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const isLoading = movieDetailLoading || movieVideoLoading;
    const videoId = movieVideo?.results[0]?.key;

    const handlePlayTrailer = () => {
        navigation.navigate('VideoScreen', {
            id: videoId,
        });
    };
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={Theme.color.BLACK} />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ImageBackground source={{ uri: `${IMAGE_BASE_URL + movieDetail?.poster_path}` }} style={styles.headerImage}>
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,1)"]}
                    style={styles.gradient}
                />

                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                        <Icon name="chevron-back" size={30} color={Theme.color.COLOR_WHITE} />
                    </TouchableOpacity>
                    <SmallText size={4.3} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD} color={Theme.color.COLOR_WHITE}>Watch</SmallText>

                </View>

                <View style={styles.headerContent}>
                    <SmallText size={5} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} color={Theme.color.COLOR_WHITE} textStyles={styles.releaseDate}>{`In Theaters ${moment(movieDetail?.release_date).format("MMMM DD YYYY")}`}</SmallText>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => { navigation.navigate("SeatBooking") }} style={styles.primaryButton}>
                            <SmallText size={4.2} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD} color={Theme.color.COLOR_WHITE}>Get Tickets</SmallText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryButton} onPress={handlePlayTrailer}>
                            <View style={styles.rowcenter}>
                                <Icon size={21} name="play" color={Theme.color.COLOR_WHITE} style={{ marginRight: width(2) }} />
                                <SmallText size={4.2} fontFamily={Theme.fonts.FONT_POPPINS_SEMIBOLD} color={Theme.color.COLOR_WHITE}>Watch Trailer</SmallText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {/* Genres */}
            <View style={styles.sectionGenre}>
                <SmallText textStyles={styles.sectionTitle} size={4.7} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_TEXT}>Genres</SmallText>
                <View style={styles.genreContainer}>
                    {movieDetail?.genres.map((genre: { name: string }, index: number) => (
                        <View
                            key={index}
                            style={[
                                styles.genreTag,
                                { backgroundColor: genreColors[index % genreColors.length] },
                            ]}
                        >
                            <SmallText size={3.8} fontFamily={Theme.fonts.FONT_POPPINS_BOLD} color={Theme.color.COLOR_WHITE}>{genre?.name}</SmallText>
                        </View>
                    ))}
                </View>
                <View style={styles.divider} />
            </View>

            {/* Overview */}
            <View style={styles.section}>
                <SmallText textStyles={styles.sectionTitle} size={4.7} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_TEXT}>Overview</SmallText>
                <SmallText textStyles={styles.overview} size={4} fontFamily={Theme.fonts.FONT_POPPINS_REGULAR} color={Theme.color.COLOR_SUBTEXT}>{movieDetail?.overview}</SmallText>
            </View>
        </ScrollView>
    );
}

const genreColors = ["#2DD4BF", "#F472B6", "#8B5CF6", "#EAB308"];
