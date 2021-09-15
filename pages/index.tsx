import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Landing from '../components/Landing';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { hotel1 } from '../styles/ThemeConfig';
import Nav from '../components/Nav';

const Home = ({ hotels, updateTheme }: any) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <Nav />
      <p>{t('home.title')}</p>
      <p>{t('home.lorem')}</p>
      <button
        onClick={() => {
          updateTheme(hotel1);
        }}
      >
        {t('home.button')}
      </button>
      <Landing hotels={hotels} />
    </div>
  );
};

export async function getStaticProps(config: any) {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          capital
        }
      }
    `
  });
  return {
    props: {
      ...(await serverSideTranslations(config.locale, ['common'])),
      hotels: data.countries.slice(0, 4)
    }
  };
}

export default Home;
