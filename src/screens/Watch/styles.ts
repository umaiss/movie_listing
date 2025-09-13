import { StyleSheet } from "react-native"
import { height, width } from "../../utils/dimensions"
import Theme from "../../theme/theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: height(1),
        paddingHorizontal: height(2),
    },
    card: {
        marginBottom: height(2),
        borderRadius: 15,
        overflow: "hidden",
    },
    image: {
        width: width(100),
        height: height(22.5),
        justifyContent: "flex-end",
    },
    imageStyle: {
        borderRadius: width(4),
    },
    textContainer: {
        height: height(8),
        justifyContent: "center",
        alignItems: 'flex-start'

        // padding: 10,
    },
    title: {
        paddingLeft: width(5),
        width: width(90)
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.color.COLOR_WHITE,
    },
})

export default styles