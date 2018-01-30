import React from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { Wrapper, ContentSection, Title, Header, Img } from './WrapperComponent';
import { AboutMe } from './AboutMe';
import Article from './Articles';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email1.png';
import github from '../assets/github-logo1.png';
import telephone from '../assets/phone-book.png';
const mainColor = 'white';

const ContentWrapper = styled.section`
  background: ${props => props.color || '#ffffff'};
  padding-top: ${props => props.paddingTop || '50px'};
  height: 100%;
  display: flex;
  justify-content: ${props => props.justify || 'space-between'};
  flex-direction: row;
`;

const Span = styled.section`
  width: 70%;
  margin: auto 0 auto 0;
  font-size: 1.2em;
  line-height: 25px;
  letter-spacing: 3px;
  font-family: 'Gentium Basic', serif;
  line-height: 30px;
  letter-spacing: 2px;
  font-size: 17px;
  color: #888;
`;

const Icon = styled.div`
  margin-top: 50px;
  height: 64px;
  width: 45px;
  color: black;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 150px;
  margin-top: 20px;
`;

const API_KEY = '9ec1531df4a1481f84cd63704eeb4a9c';
const apiUrl = `https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=${API_KEY}`;

const apiCall = (updateComponentState) => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => {
      updateComponentState(result.articles);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

const appendUrl = (icon) => {
  if (icon === 'linkedin') {
    window.open('https://www.linkedin.com/in/milou-post-bb59a211/');
  }
  if (icon === 'github') {
    window.open('https://github.com/Miloupost1988');
  }
  if (icon === 'email') {
    window.open('https://www.goeuro.com')
  }
}
export default class App extends React.Component {
  constructor() {
    super();
    this.updateComponentState = this.updateComponentState.bind(this);
    apiCall(this.updateComponentState);
    this.state = {
      loaded: false,
      articles: [],
      icons: [linkedin, email, github, telephone],
    };
  }

  updateComponentState(articles) {
    this.setState({ articles, loaded: true });
  }

  render() {
    const {
      loaded,
      icons,
    } = this.state;

    return (
      loaded ?
        <Wrapper>
          <ContentSection
            color={mainColor}
          >
            <Title>HI.I AM MILOU</Title>
            <ContentWrapper
              paddingTop={'0'}
            >
              <Span>After a bootcamp to learn the essentials from programming, I started my job at GoEuro GmbH in Berlin. After 3 years in the same company,
                I feel it's time to move to a new environment!
              </Span>
              <Img src={'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUeAAAAJDI0YmZjNTNiLThmM2UtNDQ4ZC04MmE1LTNkZGQyOTFlNGJkNQ.jpg'} />
            </ContentWrapper>
          </ContentSection>
          <ContentSection
            color={'#f2f2f2'}
          >
            <Header>ABOUT ME</Header>
            <AboutMe />
          </ContentSection>
          <ContentSection
            color={'#FFC55F'}
          >
            <Header>JOBS</Header>
            <Title
              size={'2.5em'}
              >GOEURO</Title>
            <Span>In the "Advertisement Team" at GoEuro I am responsible for developing user features for our biggest partners; as Airbnb, Booking.com and Spotify.
              Our features are throughout the whole funnel of the website. Which means the features have to be developed in several different Javascript Frameworks like React and Angular.
              My social skills and my development skills, leads to that I am very good in leading projects across Tech and non-Tech teams.

            </Span>
          </ContentSection>
          <ContentSection
            color={mainColor}
          >
            <Header>ARTICLES</Header>
            <ContentWrapper>
              {this.state.articles.map(article => <Article {...article} />)}
            </ContentWrapper>
          </ContentSection>
          <ContentSection
            color={'#f2f2f2'}
            padding={'50px 50px 0 50px'}
          >
            <Header>CONTACT</Header>
            <ContactDetails>
              Milou Post
              +4917625117093
              post.milou@gmail.com
            </ContactDetails>
            <ContentWrapper
              justify='center'
              color='#f2f2f2'
              paddingTop='0'
            >
              {this.state.icons.map(icon =><Icon src={icon} onClick={appendUrl(icon)} />)}
            </ContentWrapper>
          </ContentSection>
        </Wrapper> : null
    );
  }
}
