import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/dimensions';
import { AppColors } from '../../utils';

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        marginBottom: height(2),
        overflow: "hidden",
        width: '100%',


    },
    input: {
        backgroundColor: AppColors.transparent,
        color: AppColors.black,
        fontSize: width(4.2),
        height: '100%',
        marginLeft: height(1),
        width: '93%'
    },
    inputContainer: {
        alignItems: "center",
        backgroundColor: AppColors.white,
        borderColor: AppColors.borderColor,
        borderRadius: width(100),
        borderWidth: width(0.3),
        color: AppColors.black,
        flexDirection: "row",
        height: height(6.5),
        justifyContent: "space-between",
        overflow: "hidden",
        paddingLeft: width(5),
        paddingRight: width(2)
    },

});

export default styles;