import { StyleSheet } from "react-native"
import { height, width } from "../../utils/dimensions"
import Theme from "../../theme/theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.COLOR_WHITE,
    },
    content: {
        flex: 1,
    },
    seatMapWrapper: {
        position: 'relative',
        paddingHorizontal: width(2),
        paddingVertical: height(1),
        alignItems: 'center',
    },
    seatMapContainer: {
        backgroundColor: Theme.color.COLOR_WHITE,
        borderRadius: width(2),
        padding: width(2),
        width: width(95),
        alignItems: 'center',
    },
    screenContainer: {
        alignItems: 'center',
        marginBottom: height(2),
    },
    screenCurve: {
        width: width(85),
        height: height(0.8),
        backgroundColor: 'gray',
        borderRadius: width(35),
        marginBottom: height(0.5),
    },
    zoomControls: {
        position: 'absolute',
        right: width(6),
        top: height(47),
        flexDirection: 'row',
    },
    zoomButton: {
        width: width(10),
        height: width(10),
        borderRadius: width(5),
        backgroundColor: Theme.color.COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height(1),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginLeft: 5

    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingHorizontal: width(6),
        paddingVertical: height(2),
        backgroundColor: Theme.color.COLOR_WHITE,
        marginHorizontal: width(4),
        borderRadius: width(2),
        // marginTop: height(2),
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColor: {
        width: width(4),
        height: width(4),
        borderRadius: width(0.5),
        marginRight: width(1.5),
    },
    selectedSeatsContainer: {
        paddingHorizontal: width(4),
        paddingVertical: height(1),
    },
    selectedSeatsInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.color.COLOR_WHITE,
        padding: width(3),
        borderRadius: width(2),
        borderWidth: 1,
        borderColor: Theme.color.COLOR_LIGHT_GRAY,
    },
    bottomSection: {
        flexDirection: 'row',
        paddingHorizontal: width(4),
        paddingVertical: height(2),
        backgroundColor: Theme.color.COLOR_WHITE,
        borderTopWidth: 1,
        borderTopColor: Theme.color.COLOR_LIGHT_GRAY,
        alignItems: 'center',
    },
    priceContainer: {
        flex: 1,
        backgroundColor: Theme.color.COLOR_LIGHT_GRAY,
        paddingVertical: height(1),
        // paddingHorizontal: width(2),
        borderRadius: width(2),
        marginRight: width(3),

        alignItems: 'center',
    },
    proceedButton: {
        flex: 1,
        backgroundColor: Theme.color.COLOR_PRIMARY_BUTTON,
        paddingVertical: height(2),
        borderRadius: width(2),
        width: width(70),
        alignItems: 'center',
    },
})

export default styles