import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MenuItem } from "../Components/MenuItem";
import { useAppSelector } from "../Redux/hooks";

export function RestaurantDetails() {
  const { id } = useParams();
  const track_id = id ? id : "";
  const data = useAppSelector(
    (state) => state.restaurants.restaurantsDictionary
  )[track_id];

  return (
    <Container>
      <RestaurantNameBox onClick={() => console.log(data.name)}>
        <TitleContainer>
          <Img src={data.image} alt="Snow" />
          <RestaurantName>{data.name}</RestaurantName>
        </TitleContainer>
      </RestaurantNameBox>
      <div>כתובת: {data.address}</div>
      <div>
        תגיות: {data.filters.reduce((prev, curr) => `${prev} ${curr}`, "")}
      </div>
      <h2>תפריט:</h2>
      {data.menu.map((item) => (
        <MenuItem dish={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;

const RestaurantNameBox = styled.div`
  display: block;
  border: none;
  padding: 0;
  margin: 0;
  background-color: black;
`;

const Img = styled.img`
  width: 1000px;
  filter: brightness(50%);
`;

const TitleContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const RestaurantName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: white;
  margin: 0;
  font-size: 50px;
`;
