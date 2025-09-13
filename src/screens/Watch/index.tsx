import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator, FlatList, ImageBackground, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HomeHeader } from '../../components/header';
import ScreenWrapper from '../../components/screen-wrapper';
import { SmallText } from '../../components/text';
import { RootStackParamList } from '../../navigation/types/RootParamList';
import { useUpcomingQuery } from '../../redux/authApi/authApi';
import Theme from '../../theme/theme';
import { IMAGE_BASE_URL } from '../../utils/constant';
import styles from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


function Watch() {
    const { data: products, isLoading, error } = useUpcomingQuery(undefined);
    const navigation = useNavigation<NavigationProp>()

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={Theme.color.BLACK} />
            </View>
        );
    }
    return (
        <ScreenWrapper>
            <HomeHeader />
            <View style={styles.container}>
                <FlatList
                    data={products?.results}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('MovieDetail', { id: item?.id })
                        }} style={styles.card}>
                            <ImageBackground
                                resizeMode="cover"
                                source={{ uri: `${IMAGE_BASE_URL + item.poster_path}` }}
                                style={styles.image}
                                imageStyle={styles.imageStyle}
                            >
                                <LinearGradient colors={[Theme.color.TRANSPARENT, '#000000']} style={styles.textContainer}>
                                    <SmallText size={5} color={Theme.color.COLOR_WHITE} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} textStyles={styles.title}>{item.original_title}</SmallText>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScreenWrapper>
    )
}

export default Watch
