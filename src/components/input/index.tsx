import React, {
    forwardRef,
    useState,
    Ref,
    ForwardedRef,
} from 'react';
import {
    TextInput,
    TextInputProps,
    View,
    Text,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { SmallText } from '../text';
import { CommonStyles } from '../../utils';
import styles from './styles';
import Theme from '../../theme/theme';

interface InputProps {
    inputStyle?: TextStyle;
    containerStyle?: ViewStyle;
    placeholder?: string;
    placeholderColor?: string;
    inputProps?: TextInputProps;
    keyboardType?: TextInputProps['keyboardType'];
    onSubmitEditing?: TextInputProps['onSubmitEditing'];
    returnKeyType?: TextInputProps['returnKeyType'];
    secureTextEntry?: boolean;
    control?: any; // for react-hook-form, can be typed more strictly if used
    name?: string;
    label?: string;
    inputContainer?: ViewStyle;
    renderRightIcon?: React.ReactNode;
    mandatory?: boolean;
    onFocus?: () => void;
    onChangeText?: (text: string) => void;
    value?: string;
    error?: string;
    icon?: React.ReactNode
}

function Input({
        inputStyle = {},
        containerStyle = {},
        placeholder,
        placeholderColor = Theme.color.COLOT_SUBTEXT,
        inputProps,
        keyboardType = 'default',
        onSubmitEditing,
        returnKeyType = 'default',
        secureTextEntry = false,
        control,
        name,
        label,
        inputContainer,
        renderRightIcon,
        mandatory = false,
        onFocus,
        onChangeText,
        value,
        error,
        icon
    }: InputProps,
    ref: ForwardedRef<TextInput>) {

    return (
        <View style={[styles.container, containerStyle]}>
            {label ? (
                <SmallText size={3.5} color={Theme.color.COLOR_TEXT} textStyles={CommonStyles.marginLeft_5}>
                    {label}
                    {mandatory && <Text style={{ color: Theme.color.COLOR_RED }}>*</Text>}
                </SmallText>
            ) : null}

            <View
                style={[
                    styles.inputContainer,
                    inputContainer,
                ]}
            >
                {icon && icon}
                <TextInput
                    ref={ref}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor}
                    style={[styles.input, inputStyle]}
                    onChangeText={onChangeText}
                    value={value}
                    blurOnSubmit={false}
                    keyboardType={keyboardType}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secureTextEntry}
                    {...inputProps}
                />
                {renderRightIcon}
            </View>

            {error ? (
                <SmallText textStyles={CommonStyles.marginLeft_2} color={Theme.color.COLOR_RED} size={2.9}>
                    *{error}
                </SmallText>
            ) : (
                <View />
            )}
        </View>
    );
}

export default forwardRef<TextInput, InputProps>(Input);
