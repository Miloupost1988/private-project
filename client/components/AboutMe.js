import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Content = styled.section`
  margin-top: 50px;
  width: 265px;
  height: 286px;
`;

const Title = styled.h2`
  font-weight: 800;
  text-transform: uppercase;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 3em;
`;

const Info = styled.p`
  letter-spacing: 1px;
  list-style: none;
  line-height: 20px;
  font-size: 16px;
  font-weight: bold;
`;

const SkillSection = styled.div`
  width: 100%;
  height: 40px;;
  padding 3px;
`;

const SkillsHeader = styled.h4`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3px;
  letter-spacing: 3px;
  margin-top: 0;
`;

const SkillsPercentage = styled.div`
  float: left;
  width: 120px;
  height: 15px;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  margin: 0 10px 5px 0;
  text-align: center;
  background-color: #ffdb43;
  border-radius: 4px;
  -webkit-transition: width .6s ease;
  transition: width .6s ease;
`;

// const SkillContainer = ({ skill, skillPercentage }) => (
//   <SkillSection>
//     <SkillsHeader>{skills}</SkillsHeader>
//     <SkillsPercentage>{skillsPercentage}</SkillsPercentage>
//   </SkillSection>
// )

export const AboutMe = () => {
  return (
      <ContentContainer>
        <Content>
          <Title>STORY</Title>
            I am a frontend engineer, with a lot of motivation and passion to get further into developing.
        </Content>
        <Content>
          <Title>INFO</Title>
              <Info>Full Name: <span>Milou Post</span></Info>
              <Info>Birthday: <span>09.09.1988</span></Info>
              <Info>Job: <span>Frontend Engineer</span></Info>
              <Info>Website: <span>miloupost.com</span></Info>
              <Info>E-mail: <span>post.milou@gmail.com</span></Info>
        </Content>
        <Content>
          <Title>SKILLS</Title>
          <SkillSection>

            <SkillsHeader>HTML5 & CSS3</SkillsHeader>
            <SkillsPercentage>85%</SkillsPercentage>
          </SkillSection>
          <SkillSection>
            <SkillsHeader>JAVASCRIPT & JQUERY</SkillsHeader>
            <SkillsPercentage>80%</SkillsPercentage>
          </SkillSection>
          <SkillSection>
            <SkillsHeader>React</SkillsHeader>
            <SkillsPercentage>80%</SkillsPercentage>
          </SkillSection>
          <SkillSection>
            <SkillsHeader>Angular</SkillsHeader>
            <SkillsPercentage>75%</SkillsPercentage>
          </SkillSection>
        </Content>
      </ContentContainer>
  )
}
