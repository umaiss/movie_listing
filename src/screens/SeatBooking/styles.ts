import { StyleSheet } from "react-native"
import { height, width } from "../../utils/dimensions"
import Theme from "../../theme/theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        marginTop: height(2),
        marginLeft: height(1.6),
        marginBottom: height(1.6),
    },
    dateScroll: { paddingHorizontal: 10 },
    dateButton: {
        paddingVertical: height(1),
        paddingHorizontal: height(2),
        backgroundColor: Theme.color.COLOR_LIGHT_GRAY,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    dateButtonActive: { backgroundColor: Theme.color.COLOR_PRIMARY_BUTTON },
    dateText: { color: "#555" },
    showtimeContainer: {
        paddingHorizontal: 16,
    },
    flatListContainer: {
        paddingHorizontal: 4,
    },
    showtimeCard: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: Theme.color.COLOR_LIGHT_GRAY,
        borderRadius: 12,
        padding: height(1.6),
        height: height(18),
        width: width(65),
        marginRight: width(3),
    },
    showtimeCardActive: {
        borderColor: Theme.color.COLOR_PRIMARY_BUTTON,
    },
    hallText: { marginLeft: 8 },

    price: { fontSize: 14, color: "#444" },
    bold: { fontWeight: "700" },
    selectButton: {
        backgroundColor: Theme.color.COLOR_PRIMARY_BUTTON,
        paddingVertical: height(2),
        alignItems: "center",
        borderRadius: width(3),
        width: width(90),
        bottom: height(4)
    },
    selectButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },

    seatsMainView: {
        marginTop: height(5),
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})

export default styles