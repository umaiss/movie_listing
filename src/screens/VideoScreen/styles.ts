import { StyleSheet } from "react-native"
import { height, width } from "../../utils/dimensions"
import Theme from "../../theme/theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.BLACK,
    },
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: width(100),
        height: height(100),
    },
    loadingContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlsOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        padding: width(5),
    },
    topControls: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: height(5),
        paddingLeft: height(1)
    },
    backButton: {
        padding: width(2),
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: width(2),
        marginRight: width(3),
    },
    movieTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    centerControls: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        padding: width(4),
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: width(6),
    },
    bottomControls: {
        paddingBottom: height(3),
    },
    progressContainer: {
        marginBottom: height(1),
    },
    progressBar: {
        width: '100%',
        height: height(1),
        justifyContent: 'center',
    },
    progressBackground: {
        height: height(0.5),
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: height(0.25),
        position: 'relative',
    },
    progressFill: {
        height: '100%',
        backgroundColor: Theme.color.COLOR_PRIMARY_BUTTON || '#FF6B6B',
        borderRadius: height(0.25),
    },
    progressThumb: {
        position: 'absolute',
        top: -height(0.5),
        width: height(1.5),
        height: height(1.5),
        backgroundColor: Theme.color.COLOR_WHITE,
        borderRadius: height(0.75),
        marginLeft: -height(0.75),
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default styles