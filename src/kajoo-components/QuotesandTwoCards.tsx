/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './QuotesandTwoCards.module.css'

const QuotesandTwoCards = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/AL96Q61oN6NM_ZtgeIImW.png"
            alt="Rectangle23264179"
            className={styles['image']}
          />
          <Text
            tag="span"
            text="A luxury haven amid oak-covered hills. Explore San Antonio or relax by the pool."
            className={styles['text']}
          />
          <Container className={styles['container2']}>
            <Text
              tag="span"
              text="PLAN YOUR TRIP"
              className={styles['text1']}
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/8cvR5RYJVcBaCwr4VAsvT.svg"
              alt="IconsaxLineararrowright228143"
              className={styles['image1']}
            />
          </Container>
        </Container>
        <Container className={styles['container3']}>
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/bjYZ21TgY0wEuZaMbm7xd.png"
            alt="Rectangle24264180"
            className={styles['image2']}
          />
          <Text
            tag="span"
            text="Engage in meaningful conversations with peers and industry providers."
            className={styles['text2']}
          />
          <Container className={styles['container4']}>
            <Text
              tag="span"
              text="EXPLORE OUR MARKETPLACE"
              className={styles['text3']}
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/5df_j9WGONxVNYi0nF3EB.svg"
              alt="IconsaxLineararrowright228147"
              className={styles['image3']}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container5']} ${styles['container-default']} `}
        >
          <Text
            tag="span"
            text="“The biggest resource at the conference is the knowledge and skills of the bankers around the table.”"
            className={styles['text4']}
          />
        </Container>
        <Container
          className={` ${styles['container6']} ${styles['container-default']} `}
        />
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
