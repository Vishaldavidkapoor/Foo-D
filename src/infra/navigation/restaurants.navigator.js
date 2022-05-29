import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../screens/restaurant-detail-screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode='none'>
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantScreen}
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />

      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
