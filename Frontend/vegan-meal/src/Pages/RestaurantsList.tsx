import { useState } from "react";
import { Restaurant } from "../Types/Restaurant";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../Redux/hooks";

const PAGE_SIZE = 10;

// type Props = {
//   data: Restaurant[];
// };

export function RestaurantsList() {
  const [page, setPage] = useState<number>(0);
  const data = useAppSelector((state) => {
    return state.restaurants;
  });

  return (
    <div>
      <Ul>
        {data &&
          data.length > 20 &&
          data.slice(page, page + PAGE_SIZE).map((restaurant, index) => (
            <Li key={index}>
              <RestaurantButton
                to={`/restaurant-details/${restaurant.track_id}`}
                onClick={() => console.log(restaurant.name)}
              >
                <Container>
                  <Img src={restaurant.image} alt="Snow" />
                  <RestaurantName>{restaurant.name}</RestaurantName>
                </Container>
              </RestaurantButton>
            </Li>
          ))}
      </Ul>
      <ButtonsContainer>
        {page > 0 && (
          <PrevButtons
            onClick={() => {
              setPage(page - PAGE_SIZE);
            }}
          >
            Previous
          </PrevButtons>
        )}
        {page < data.length - PAGE_SIZE + 1 && (
          <NextButtons
            onClick={() => {
              setPage(page + PAGE_SIZE);
            }}
          >
            Next
          </NextButtons>
        )}
      </ButtonsContainer>
    </div>
  );
}

const RestaurantButton = styled(Link)`
  display: block;
  border: none;
  padding: 0;
  margin: 0;
  background-color: black;
`;

const Img = styled.img`
  width: 1000px;
  cursor: pointer;
  filter: brightness(50%);
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RestaurantName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: white;
  margin: 0;
`;

const NextButtons = styled.button`
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: black;
  border: 1px solid gray;
  color: white;
  font-size: 20px;
  right: 0;
`;

const PrevButtons = styled.button`
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: black;
  border: 1px solid gray;
  color: white;
  font-size: 20px;
  left: 0;
`;

const ButtonsContainer = styled.div`
  width: 1000px;
  margin: auto;
  padding: 5px 0;
  position: relative;
`;
