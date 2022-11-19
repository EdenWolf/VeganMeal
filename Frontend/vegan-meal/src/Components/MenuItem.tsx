import styled from "styled-components";
import { Dish } from "../Types/Restaurant";

type Props = {
  dish: Dish;
};

// export type Dish = {
//     description: string;
//     drinks: boolean;
//     image: string;
//     name: string;
//     notFood: boolean;
//     price: number;
//     vegan: boolean;
//     vegetarian: boolean;
// };

export function MenuItem({ dish }: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={dish.image} />
      </ImageContainer>
      <DescriptionContainer>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
      </DescriptionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 1px solid gray;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

const DescriptionContainer = styled.div`
  text-align: right;
`;
