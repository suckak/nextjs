import styled from 'styled-components';
import Image from 'next/image';
import { Hotel } from '../types/types';

const imgUrl = 'media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg';

const Content = ({ hotel }) => {
  return (
    <StyledDiv>
      <p>{hotel.name}</p>
      <Image src={imgUrl} width={500} height={300} />
      <p>{hotel.capital}</p>
    </StyledDiv>
  );
};

const Landing = ({ hotels }) => {
  return (
    <div>
      {hotels &&
        hotels.map((hotel: Hotel) => (
          <Content key={hotel.code} hotel={hotel} />
        ))}
    </div>
  );
};

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.secundaryColor};
`;

export default Landing;
