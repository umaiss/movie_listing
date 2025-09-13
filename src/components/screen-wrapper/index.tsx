import React, { ReactNode } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  View,
  ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import Theme from '../../theme/theme';

interface ScreenWrapperProps {
  children: ReactNode;
  statusBarColor?: string;
  transclucent?: boolean;
  scrollEnabled?: boolean;
  backgroundImage?: ImageSourcePropType;
  backgroundColor?: string;
  headerUnScrollable?: () => ReactNode;
  footerUnScrollable?: () => ReactNode;
  barStyle?: StatusBarProps['barStyle'];
  imageStyle?: ImageStyle
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  statusBarColor = Theme.color.COLOR_WHITE,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  backgroundColor = Theme.color.TRANSPARENT,
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  barStyle = 'dark-content',
  imageStyle = {}
}) => {
  const FocusAwareStatusBar: React.FC<StatusBarProps> = props => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  };

  const content = () => (
    <View style={[styles.container, { backgroundColor }]}>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {headerUnScrollable()}
      {scrollEnabled ? (
        <KeyboardAwareScrollView
          style={[styles.container, { backgroundColor }]}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
      {footerUnScrollable()}
    </View>
  );

  return backgroundImage ? (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode='cover'
      imageStyle={imageStyle}
    >
      {content()}
    </ImageBackground>
  ) : (
    content()
  );
};

export default ScreenWrapper;
