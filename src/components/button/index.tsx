import React, { useMemo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { width } from '../../utils/dimensions';
import { SmallText } from '../text';
import styles from './styles';
import Theme from '../../theme/theme';

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  withShadow?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: TextStyle;
  textProps?: Record<string, any>;
  disabled?: boolean;
  buttonTextColor?: string;
  fontFamily?: string;
  size?: number;
  isLoading?: boolean;
  ActivityIndicatorColor?: string
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children = 'Button',
  variant = 'primary',
  withShadow = false,
  containerStyle = {},
  touchableOpacityProps = {},
  textStyle,
  textProps = {},
  disabled = false,
  buttonTextColor = Theme.color.COLOR_WHITE,
  fontFamily = Theme.fonts.FONT_NUNITO_MEDIUM,
  size = 4.5,
  isLoading = false,
  ActivityIndicatorColor = Theme.color.COLOR_WHITE
}) => {
  const getStyles = useMemo(() => ({
      container: {
        ...styles.container,
        ...(disabled
          ? styles.disableContainer
          : variant === 'primary'
            ? styles.primaryContainer
            : styles.secondaryContainer),
        ...(withShadow && styles.shadow),
      },
    }), [variant, withShadow, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      disabled={disabled || isLoading}
      {...touchableOpacityProps}
    >
      {isLoading ? (
        <ActivityIndicator color={ActivityIndicatorColor} size={width(6.5)} />
      ) : (
        <SmallText
          color={buttonTextColor}
          textStyles={textStyle}
          textProps={textProps}
          size={size}
          fontFamily={fontFamily}
        >
          {children}
        </SmallText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
