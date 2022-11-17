import { Link } from "react-router-dom";
import styled from "styled-components";

export function Filter() {
  return (
    <Container>
      <Title>סינון לפי:</Title>
      <NavLink to="/filter/location">מיקום</NavLink>
      <NavLink to="/filter/types">סוג מסעדה</NavLink>
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
