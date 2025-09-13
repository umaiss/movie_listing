import { StyleSheet } from "react-native"
import { height, width } from "../../utils/dimensions"
import Theme from "../../theme/theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.COLOR_WHITE,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.color.COLOR_WHITE,
    },
    headerImage: {
        height: height(55),
        justifyContent: "flex-end",
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
    },
    topBar: {
        position: "absolute",
        top: height(6),
        left: height(2),
        right: height(2),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    backButton: {
        marginRight: 15,
    },
    backText: {
        fontSize: 24,
        color: "#fff",
    },
    topTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
    },
    headerContent: {
        padding: 20,
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
    },
    releaseDate: {
        marginTop: height(0.5),
        marginBottom: height(2),
        alignSelf: 'center'
    },
    buttonContainer: {
        gap: 12,
        alignSelf: 'center'
    },
    primaryButton: {
        width: width(65),
        backgroundColor: Theme.color.COLOR_PRIMARY_BUTTON,
        paddingVertical: height(2.2),
        borderRadius: 12,
        alignItems: "center",
    },

    secondaryButton: {
        width: width(65),
        borderWidth: 1,
        borderColor: Theme.color.COLOR_PRIMARY_BUTTON,
        paddingVertical: height(2.2),
        borderRadius: 12,
        alignItems: "center",
    },
    secondaryButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    sectionGenre: {
        marginTop: height(3),
        paddingHorizontal: width(10),
    },
    section: {
        // marginTop: height(3),
        paddingHorizontal: width(10),
    },
    sectionTitle: {
        marginBottom: height(1.8),
    },
    genreContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    genreTag: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
    },

    overview: {
        lineHeight: height(2.7),
    },
    rowcenter: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        marginVertical: height(3),
        borderWidth: 1,
        borderColor: Theme.color.COLOR_LIGHT_GRAY
    }
})

export default styles