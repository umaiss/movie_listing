import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Circle } from "react-native-svg"
import Theme from "../../theme/theme"
import { SvgStyleProps } from "../../utils/interfaces"
// import { SvgStyleProps } from "../../utilities/interfaces"

function DashboardIcon({ width = 24, height = 24, iconColor = Theme.color.COLOR_WHITE }: SvgStyleProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"

        >
            <Circle cx={13} cy={3} r={3} fill={iconColor} />
            <Circle cx={13} cy={13} r={3} fill={iconColor} />
            <Circle cx={3} cy={13} r={3} fill={iconColor} />
            <Circle cx={3} cy={3} r={3} fill={iconColor} />
        </Svg>
    )
}

export default DashboardIcon
