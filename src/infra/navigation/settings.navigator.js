import React from "react";

import { FavouritesScreen } from "../../features/account/screens/settings/favourites.screen";
import { SettingsScreen } from "../../features/account/screens/settings/settings.screen";
import { CameraScreen } from "../../features/account/screens/settings/camera.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name='Settings' component={SettingsScreen} />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />

      <SettingsStack.Screen name='Camera' component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
