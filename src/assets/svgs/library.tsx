import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Circle, Rect } from "react-native-svg"
import Theme from "../../theme/theme"
import { SvgStyleProps } from "../../utils/interfaces"
// import { SvgStyleProps } from "../../utilities/interfaces"

function LibraryIcon({ width = 24, height = 24, iconColor = Theme.color.COLOR_WHITE }: SvgStyleProps) {
    return (
        <Svg
            width={width}
            height={width}
            viewBox="0 0 18 18"
            fill="none"

        >
            <Rect
                y={3.47369}
                width={18}
                height={14.5263}
                rx={0.947368}
                fill={iconColor}
            />
            <Path
                d="M16.105 1.579c.505 0 .632.526.632.79H.947c0-.632.421-.79.632-.79h14.526zM15.246 0c.435 0 .543.421.543.632H2.21c0-.506.363-.632.544-.632h12.492z"
                fill={iconColor}
            />
        </Svg>
    )
}

export default LibraryIcon
