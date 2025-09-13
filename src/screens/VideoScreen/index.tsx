import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import YoutubePlayer from "react-native-youtube-iframe";
import ScreenWrapper from '../../components/screen-wrapper';
import { RootStackParamList } from '../../navigation/types/RootParamList';
import Theme from '../../theme/theme';
import { height, width } from '../../utils/dimensions';
import styles from './styles';


interface VideoScreenProps {
    route: {
        params: {
            id: string;
        };
    };
}
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const VideoScreen = ({ route }: VideoScreenProps) => {
    const { id } = route.params;
    const navigation = useNavigation<NavigationProp>();
    const [playing, setPlaying] = useState(true);
    const [showControls, setShowControls] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowControls(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showControls]);

    const onStateChange = useCallback((state: string) => {
        console.log("state", state)
        if (state === "ended") {
            setPlaying(false);
            navigation.goBack()
        }
    }, []);

    return (
        <ScreenWrapper backgroundColor={Theme.color.BLACK}>
            <StatusBar hidden />
            <View style={styles.topControls}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={30} color={Theme.color.COLOR_WHITE} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: height(28) }}>
                <YoutubePlayer
                    height={900}
                    play={playing}
                    videoId={id}
                    onChangeState={onStateChange}
                />

            </View>
        </ScreenWrapper>
    );
};


export default VideoScreen;
