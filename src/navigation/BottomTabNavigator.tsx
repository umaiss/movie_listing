import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabParamList } from './types/RootParamList';

// You can use react-native-vector-icons or any icon library
import { height, width } from '../utils/dimensions';
import Theme from '../theme/theme';
import { Dashboard, Library, More, Watch } from '../screens';
import { DashboardIcon, LibraryIcon, ListIcon, WatchIcon } from '../assets/svgs';
import { SmallText } from '../components/text';
import { StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Watch'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;

                    switch (route.name) {
                        case 'Dashboard':
                            return (
                                <>
                                    <DashboardIcon width={24} height={24} iconColor={focused ? Theme.color.COLOR_WHITE : 'gray'} />
                                    <SmallText textStyles={styles.bottomTextStyle} size={3} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} color={focused ? Theme.color.COLOR_WHITE : 'gray'}>{'Dashboard'}</SmallText>
                                </>
                            );
                        case 'Watch':
                            return (
                                <>
                                    <WatchIcon width={24} height={24} iconColor={focused ? Theme.color.COLOR_WHITE : 'gray'} />
                                    <SmallText textStyles={styles.bottomTextStyle} size={3} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} color={focused ? Theme.color.COLOR_WHITE : 'gray'}>{'Watch'}</SmallText>
                                </>
                            );
                        case 'Library':
                            return (
                                <>
                                    <LibraryIcon width={24} height={24} iconColor={focused ? Theme.color.COLOR_WHITE : 'gray'} />
                                    <SmallText textStyles={styles.bottomTextStyle} size={3} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} color={focused ? Theme.color.COLOR_WHITE : 'gray'}>{'Media Library'}</SmallText>
                                </>
                            );
                        case 'More':
                            return (
                                <>
                                    <ListIcon width={24} height={24} iconColor={focused ? Theme.color.COLOR_WHITE : 'gray'} />
                                    <SmallText textStyles={styles.bottomTextStyle} size={3} fontFamily={Theme.fonts.FONT_POPPINS_MEDIUM} color={focused ? Theme.color.COLOR_WHITE : 'gray'}>{'More'}</SmallText>
                                </>
                            );
                        default:
                            iconName = 'dashboard';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Theme.color.COLOR_WHITE,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: Theme.color.COLOR_BOTTOM_TAB_BG,
                    height: height(10),
                    paddingBottom: height(1.5),
                    paddingTop: height(3),
                    paddingHorizontal: width(2),
                    borderTopRightRadius: width(8),
                    borderTopLeftRadius: width(8),
                },

            })}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}

            />

            <Tab.Screen
                name="Watch"
                component={Watch}

            />

            <Tab.Screen
                name="Library"
                component={Library}

            />

            <Tab.Screen
                name="More"
                component={More}

            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    bottomTextStyle: {
        paddingTop: height(1),
        width: '100%',
        textAlign: 'center',
    },
});