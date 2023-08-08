/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const QuotesandTwoCards = (props) => {
  return (
    <Container className={`quotesand-two-cards-root ${props.rootClassName} `}>
      <Container className="quotesand-two-cards-container">
        <Container className="quotesand-two-cards-container1">
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/AL96Q61oN6NM_ZtgeIImW.png"
            alt="Rectangle23264179"
            className="quotesand-two-cards-image"
          />
          <Text
            tag="span"
            text="A luxury haven amid oak-covered hills. Explore San Antonio or relax by the pool."
            className="quotesand-two-cards-text"
          />
          <Container className="quotesand-two-cards-container2">
            <Text
              tag="span"
              text="PLAN YOUR TRIP"
              className="quotesand-two-cards-text1"
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/8cvR5RYJVcBaCwr4VAsvT.svg"
              alt="IconsaxLineararrowright228143"
              className="quotesand-two-cards-image1"
            />
          </Container>
        </Container>
        <Container className="quotesand-two-cards-container3">
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/bjYZ21TgY0wEuZaMbm7xd.png"
            alt="Rectangle24264180"
            className="quotesand-two-cards-image2"
          />
          <Text
            tag="span"
            text="Engage in meaningful conversations with peers and industry providers."
            className="quotesand-two-cards-text2"
          />
          <Container className="quotesand-two-cards-container4">
            <Text
              tag="span"
              text="EXPLORE OUR MARKETPLACE"
              className="quotesand-two-cards-text3"
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/5df_j9WGONxVNYi0nF3EB.svg"
              alt="IconsaxLineararrowright228147"
              className="quotesand-two-cards-image3"
            />
          </Container>
        </Container>
        <Container className="quotesand-two-cards-container5 quotesand-two-cards-container-default">
          <Text
            tag="span"
            text="“The biggest resource at the conference is the knowledge and skills of the bankers around the table.”"
            className="quotesand-two-cards-text4"
          />
        </Container>
        <Container className="quotesand-two-cards-container6 quotesand-two-cards-container-default" />
      </Container>
    </Container>
  )
}

QuotesandTwoCards.defaultProps = {
  fields: {},
  rootClassName: '',
}

QuotesandTwoCards.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default QuotesandTwoCards
