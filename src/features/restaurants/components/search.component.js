import React, { useState } from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { useContext } from "react/cjs/react.development";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search a location'
        onIconPress={onFavouritesToggle}
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
