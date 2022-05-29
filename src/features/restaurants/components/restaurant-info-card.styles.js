import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
  color: ${(props) => props.theme.colors.ui.quaternary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.quaternary};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;
