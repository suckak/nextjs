import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>Home</li>
        <li>Rooms</li>
        <li>Booking</li>
        <li>
          <Link href="/detail">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  & ul {
    display: flex;
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  & li {
    flex: auto;
    line-height: 40px;
    height: 40px;
  }
`;

export default Nav;
