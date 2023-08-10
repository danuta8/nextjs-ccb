/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, RichText, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Hero.module.css'

const Hero = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/J-NJHWwSGTaYrDXzD3K-V.svg"
          alt="Rectangle2264133"
          className={styles['image']}
        />
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <RichText
              value='&lt;span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 600; \nfont-family: Lora; \ntext-align: left; \nline-height: normal; \nfont-size: 54px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 18px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"&gt;&lt;span &gt;Empowering Community &lt;/span&gt;&lt;br /&gt;&lt;span &gt;Bankers&lt;/span&gt;&lt;/span&gt;'
              className={styles['richtext']}
            />
            <Text
              tag="span"
              text="February 11-13, 2024 San Antonio"
              className={styles['text']}
            />
            <Text
              tag="span"
              text="The Conference for Community Bankers is a dynamic gathering where industry leaders, experts, and professionals unite to explore the latest trends, strategies, and innovations in the banking sector."
              className={styles['text1']}
            />
            <Container className={styles['container3']}>
              <Container className={styles['container4']}>
                <Image
                  src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/LaoN_ef6OGC2yrdQmF0m_.png"
                  alt="Rectangle1391380"
                  className={styles['image1']}
                />
                <Text
                  tag="span"
                  text="REGISTRATION"
                  className={styles['text2']}
                />
              </Container>
              <Text
                text="VIEW PROGRAM"
                tag="span"
                className={` ${styles['paragraph-default']} ${styles['text3']} `}
              />
            </Container>
          </Container>
          <Container className={styles['container5']}>
            <Container className={styles['container6']}>
              <Image
                src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/GXOUie2T1FTq6sKU1B2U3.png"
                alt="Rectangle3264136"
                className={styles['image2']}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Hero.defaultProps = {
  fields: {},
  rootClassName: '',
}

Hero.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Hero
