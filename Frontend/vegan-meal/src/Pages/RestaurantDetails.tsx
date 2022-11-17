import { useParams } from "react-router-dom";
import styled from "styled-components";

export function RestaurantDetails() {
  const { index } = useParams();
  return <Title>Restaurant Details Page : {index}</Title>;
}
const Title = styled.h2`
  font-size: 50px;
  color: white;
`;
