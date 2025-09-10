import { Dimensions } from "react-native";

const width = (percent: number): number => {
    const fullWidth = Dimensions.get("window").width;
    if (percent >= 100) return fullWidth;
    else if (percent <= 0) return 0;
    else return fullWidth * (percent / 100);
};

const height = (percent: number): number => {
    const fullHeight = Dimensions.get("window").height;
    if (percent >= 100) return fullHeight;
    else if (percent <= 0) return 0;
    else return fullHeight * (percent / 100);
};

export { height, width };
