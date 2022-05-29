import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Icon,
  Rating,
  Section,
  SectionEnd,
  Open,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    photos = "https://img2.cgtrader.com/items/2223483/560e3b8cb3/sketchup-restaurant-3d-model-skp.jpg",
    address = "some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const RatingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos.toString() }} />
      <Text variant='label'>{name}</Text>
      <Section>
        <Rating>
          {RatingArray.map((_, i) => (
            <SvgXml
              key={`star-${placeId}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant='error'>CLOSED TEMPORARILY</Text>
          )}
          <Spacer position='left' size='large' />
          {isOpenNow && <Open xml={open} width={20} height={20} />}
          <Spacer position='left' size='large' />
          <Icon style={{ height: 15, width: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};
