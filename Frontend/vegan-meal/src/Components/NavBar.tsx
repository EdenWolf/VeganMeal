import styled from "styled-components";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Ul>
        <Li>
          <NavLink to="/">הצג הכל</NavLink>
        </Li>
        <Drpodowm>
          <NavLink to="/filter">סינון</NavLink>
          <DropdownContent>
            <NavLink to="/filter/location">לפי מיקום</NavLink>
            <NavLink to="/filter/types">לפי סוג מסעדה</NavLink>
          </DropdownContent>
        </Drpodowm>
        <Drpodowm>
          <NavLink to="/search">חיפוש</NavLink>
          <DropdownContent>
            <NavLink to="/search/restaurant">חיפוש מסעדה</NavLink>
            <NavLink to="/search/dish">חיפוש ארוחה</NavLink>
          </DropdownContent>
        </Drpodowm>
      </Ul>
    </div>
  );
}

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 200px;
  background-color: black;
  top: 70px;
  z-index: 1;
`;

const Drpodowm = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  width: 210px;
  height: 100%;
  border: solid gray 1px;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  width: 210px;
  height: 100%;
  border: solid gray 1px;
`;
const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  padding: 12px 0;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  background-color: black;
  box-shadow: 0 0 20px gray;
  height: 70px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
