import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../features/restaurants/components/restaurants-info-card.component";
import { SafeArea } from "../utils/safe-area.components";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Dosa' />
          <List.Item title='Idli' />
        </List.Accordion>
        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='food' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Uthapam' />
          <List.Item title='Chicken Biryani' />
          <List.Item title='Dosa' />
          <List.Item title='Idli' />
        </List.Accordion>
        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Uthpam' />
          <List.Item title='Chicken Biryani' />
          <List.Item title='Dosa' />
          <List.Item title='Idli' />
        </List.Accordion>
        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='glass-wine' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Butter Milk' />
          <List.Item title='Pepsi' />
          <List.Item title='Lemon Juice' />
          <List.Item title='Wine' />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
