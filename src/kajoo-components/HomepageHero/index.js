/* eslint-disable */
import React from 'react'
import { Container, Image, RichText, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const HomepageHero = (props) => {
  return (
    <Container className={`homepage-hero-root ${props.rootClassName} `}>
      <Container className="homepage-hero-container">
        <Image
          src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/T-4nJ_RTft1bJmhZkBehS.svg"
          alt="Rectangle2264133"
          className="homepage-hero-image"
        />
        <Container className="homepage-hero-container1">
          <Container className="homepage-hero-container2">
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/VDEmzgYa3oJri4OUOR_GX.png"
              alt="Rectangle3264136"
              className="homepage-hero-image1"
            />
          </Container>
        </Container>
        <RichText
          value='&lt;span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 700; \nfont-family: Lora; \ntext-align: left; \nline-height: normal; \nfont-size: 54px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntop: 165px; \nleft: 122px; \ntext-decoration: none; \n"&gt;&lt;span &gt;Empowering Community &lt;/span&gt;&lt;br /&gt;&lt;span &gt;Bankers&lt;/span&gt;&lt;/span&gt;'
          className="homepage-hero-richtext"
        />
        <Text
          tag="span"
          text="The Conference for Community Bankers is a dynamic gathering where industry leaders, experts, and professionals unite to explore the latest trends, strategies, and innovations in the banking sector."
          className="homepage-hero-text"
        />
        <Container className="homepage-hero-container3">
          <Container className="homepage-hero-container4">
            <Text
              tag="span"
              text="VIEW PROGRAM"
              className="homepage-hero-text1"
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/YemzUqv28Ol6xJtifsmPj.svg"
              alt="IconsaxLineararrowright2264147"
              className="homepage-hero-image2"
            />
          </Container>
        </Container>
        <Text
          tag="span"
          text="February 11-13, 2024 San Antonio"
          className="homepage-hero-text2"
        />
        <Container className="homepage-hero-container5">
          <Container className="homepage-hero-container6">
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/IHy0JE3Z5yMihClwjiig-.png"
              alt="Rectangle1I391391391380"
              className="homepage-hero-image3"
            />
            <Text
              tag="span"
              text="REGISTRATION"
              className="homepage-hero-text3"
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

HomepageHero.defaultProps = {
  fields: {},
  rootClassName: '',
}

HomepageHero.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default HomepageHero
