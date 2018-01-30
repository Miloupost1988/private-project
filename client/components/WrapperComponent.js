import styled from 'styled-components';

export const Wrapper = styled.section`
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
  color: #222;
  margin: 0;
  padding: 20px;
  height: 100%;
`;

export const ContentSection = styled.section`
  padding: ${props => props.padding || '50px'};
  background-color: ${props => props.color || 'white'};
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: ${props => props.size || '3.5em'};
`;

export const Header = styled.a`
  font-weight: 800;
  background: #000;
  color: #fff;
  padding: 5px 6px;
  letter-spacing: 5px;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
`;

export const Img = styled.img`
  border: 4px solid #ffdb43;
  border-radius: 100%;
  height: 200px;
  width: 200px;
`;
