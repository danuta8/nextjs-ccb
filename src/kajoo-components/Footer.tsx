/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text
            tag="span"
            text="Let’s Stay Connected"
            className={styles['text']}
          />
          <Text
            tag="span"
            text="Join our mailing list for the latest news about our events, discounts and more"
            className={styles['text01']}
          />
          <Container className={styles['container2']}>
            <Text
              tag="span"
              text="First and Last Name"
              className={styles['text02']}
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/5AuDzoiYIsVBwu9466XW2.svg"
              alt="Rectangle29323331"
              className={styles['image']}
            />
          </Container>
          <Container className={styles['container3']}>
            <Text
              tag="span"
              text="Email Address:"
              className={styles['text03']}
            />
            <Image
              src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/UD6eU-o_OViptZoss-Dgn.svg"
              alt="Rectangle28264187"
              className={styles['image1']}
            />
            <Container className={styles['container4']}>
              <Text tag="span" text="Sign Up" className={styles['text04']} />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container5']}>
          <Text tag="span" text="Site Map" className={styles['text05']} />
          <RichText
            value='&lt;span style="color: rgba(0, 0, 0, 1); \nwidth: 259px; \nheight: auto; \ntext-align: left; \nline-height: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 15px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \nfont-family: Lato; \nfont-size: 18px; \nfont-stretch: normal; \nfont-style: normal; \nfont-weight: 400; \ntext-decoration: none; \n"&gt;&lt;span &gt;Home&lt;/span&gt;&lt;br /&gt;&lt;span /&gt;&lt;/span&gt;'
            className={styles['richtext']}
          />
          <Text tag="span" text="Program" className={styles['text06']} />
          <RichText
            value='&lt;span style="color: rgba(0, 0, 0, 1); \nwidth: 259px; \nheight: auto; \ntext-align: left; \nline-height: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 15px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \nfont-family: Lato; \nfont-size: 18px; \nfont-stretch: normal; \nfont-style: normal; \nfont-weight: 400; \ntext-decoration: none; \n"&gt;&lt;span &gt;Speakers&lt;/span&gt;&lt;br /&gt;&lt;span /&gt;&lt;/span&gt;'
            className={styles['richtext1']}
          />
          <Text tag="span" text="Plan Your Trip" className={styles['text07']} />
          <Text tag="span" text="About" className={styles['text08']} />
          <Text tag="span" text="Sponsors" className={styles['text09']} />
          <Text tag="span" text="Register" className={styles['text10']} />
        </Container>
      </Container>
      <Container className={styles['container6']}>
        <Image
          src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/cAN4bXDTeXIf1F1viC76W.png"
          alt="image128665"
          className={styles['image2']}
        />
        <Container className={styles['container7']}>
          <RichText
            value='&lt;span style="color: rgba(0, 0, 0, 1); \nwidth: 583px; \nheight: auto; \nfont-weight: 400; \nfont-family: Inter; \ntext-align: left; \nline-height: 150.52273273468018%; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 32px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"&gt;&lt;span &gt;Copyright © 2021 American Bankers Association. All rights reserved.&lt;/span&gt;&lt;br /&gt;&lt;span /&gt;&lt;/span&gt;'
            className={styles['richtext2']}
          />
          <RichText
            value='&lt;span style="color: rgba(144, 144, 144, 1); \nwidth: 583px; \nheight: auto; \nfont-weight: 400; \nfont-family: Inter; \ntext-align: center; \nline-height: 150.52273273468018%; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"&gt;&lt;span &gt;Privacy Policy | Terms of Service&lt;/span&gt;&lt;br /&gt;&lt;span /&gt;&lt;/span&gt;'
            className={styles['richtext3']}
          />
        </Container>
      </Container>
    </Container>
  )
}

Footer.defaultProps = {
  fields: {},
  rootClassName: '',
}

Footer.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Footer
