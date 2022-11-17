import { Link } from "react-router-dom";
import styled from "styled-components";

export function Search() {
  return (
    <Container>
      <Title>חיפוש לפי:</Title>
      <NavLink to="/search/restaurant">שם מסעדה</NavLink>
      <NavLink to="/search/dish">סוג ארוחה</NavLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  font-size: 50px;
  padding: 30px;
  margin: 20px;
  width: 300px;
  border: 1px solid gray;
`;

const Title = styled.h2`
  font-size: 50px;
  color: white;
`;
