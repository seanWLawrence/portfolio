import React from 'react'
import styled from "styled-components"
import TitleWrapper from '../templates/titleWrapper'
import ABOUT_DATA from '../data/about'
import Link from 'gatsby-link'

const IMAGE_URL = 'https://media.graphcms.com/k8oLYZxyR1ieU22tfZ9d'

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80vw;
  margin-top: 25px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProfileImage = styled.img`
  width: 50%;
  height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`

const profileImageStyle = ProfileImage.withComponent('section')

const TextWrapper = profileImageStyle.extend`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Text = styled.p`
  color: #555;
  width: 80%;
  margin-bottom: 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  width: 80%;
  margin: 20px 0 ;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Logo = styled.img`
  height: 30px;
  margin-right: 20px;
`

const ResumeButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: #2D9CDB;
  color: #fff;
  border-radius: 5px;
`

const About = () => (
  <TitleWrapper title='About'>
    <AboutWrapper>
      <TextWrapper>
        {ABOUT_DATA.description.map(paragraph =>
          <Text key={paragraph.id}>{paragraph.text}</Text>
        )}
        <LogoWrapper>
          {ABOUT_DATA.socialLinks.map(profile =>
            <a href={profile.profile_url}
              title={profile.title}
              target='_blank'
              rel='nofollow noreferrer noopener'
              key={profile.title}
            >
              <Logo src={profile.logo_url}
                alt={profile.title}
              />
            </a>
          )}
          <Link to='/resume'>
            <ResumeButton>Resume</ResumeButton>
          </Link>
        </LogoWrapper>
      </TextWrapper>
      <ProfileImage src={IMAGE_URL} alt='Profile image of Sean Lawrence' />
    </AboutWrapper>
  </TitleWrapper>
)

export default About
