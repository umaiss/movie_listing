import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Circle, Rect } from "react-native-svg"
import Theme from "../../theme/theme"
import { SvgStyleProps } from "../../utils/interfaces"
// import { SvgStyleProps } from "../../utilities/interfaces"

function ListIcon({ width = 24, height = 24, iconColor = Theme.color.COLOR_WHITE }: SvgStyleProps) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill={iconColor}

        >
            <G opacity={0.4} clipPath="url(#clip0_42_13939)">
                <Path
                    d="M3.466 12.133a1 1 0 001 1h1.062a1 1 0 001-1v-.17a1 1 0 00-1-1H4.466a1 1 0 00-1 1v.17zm0 4.997a1 1 0 001 1h1.062a1 1 0 001-1v-.28a1 1 0 00-1-1H4.466a1 1 0 00-1 1v.28zm0-10.06a1 1 0 001 1h1.062a1 1 0 001-1v-.082a1 1 0 00-1-1H4.466a1 1 0 00-1 1v.082zm4.593 5.063a1 1 0 001 1h11a1 1 0 001-1v-.17a1 1 0 00-1-1h-11a1 1 0 00-1 1v.17zm0 4.997a1 1 0 001 1h11a1 1 0 001-1v-.28a1 1 0 00-1-1h-11a1 1 0 00-1 1v.28zm1-11.142a1 1 0 00-1 1v.082a1 1 0 001 1h11a1 1 0 001-1v-.082a1 1 0 00-1-1h-11z"
                    fill={iconColor}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_42_13939">
                    <Path fill={iconColor} transform="translate(.059)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ListIcon
