import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../features/restaurants/components/restaurants-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../utils/safe-area.components";

import { RestaurantsContext } from "../services/restaurants/mock/restaurants.context";
import { FavouritesContext } from "../services/favourites/favourites.context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FavouritesBar } from "../services/favourites/favourites-bar.component";
import { Search } from "../features/restaurants/components/search.component";
import { FadeInView } from "../components/animations/fade.animations";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.black} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onDetail={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position='bottom' size='large'>
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
