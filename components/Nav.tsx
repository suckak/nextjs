import styled from 'styled-components';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Nav = () => {
  const { t } = useTranslation('nav');

  return (
    <StyledNav>
      <ul>
        <li>{t('home')}</li>
        <li>{t('rooms')}</li>
        <li>{t('booking')}</li>
        <li>
          <Link href="/detail">{t('about')}</Link>
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
