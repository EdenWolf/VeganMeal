import styled from "styled-components";
import { useAppSelector } from "../../Redux/hooks";

export function SearchByRestaurant() {
  const data = useAppSelector((state) => state.restaurants.restaurantsArray);

  return <Title>חיפוש מסעדה</Title>;
}

const Title = styled.h2`
  font-size: 50px;
  color: white;
`;
