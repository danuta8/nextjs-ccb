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
            text={props.fields.text}
            className={styles['text']}
          />
          <Text
            tag="span"
            text={props.fields.text1}
            className={styles['text01']}
          />
          <Container className={styles['container2']}>
            <Text
              tag="span"
              text={props.fields.text2}
              className={styles['text02']}
            />
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['image']}
            />
          </Container>
          <Container className={styles['container3']}>
            <Text
              tag="span"
              text={props.fields.text3}
              className={styles['text03']}
            />
            <Image
              src={props.fields.src1}
              alt={props.fields.alt1}
              className={styles['image1']}
            />
            <Container className={styles['container4']}>
              <Text
                tag="span"
                text={props.fields.text4}
                className={styles['text04']}
              />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container5']}>
          <Text
            tag="span"
            text={props.fields.text5}
            className={styles['text05']}
          />
          <RichText value={props.fields.value} className={styles['richtext']} />
          <Text
            tag="span"
            text={props.fields.text6}
            className={styles['text06']}
          />
          <RichText
            value={props.fields.value1}
            className={styles['richtext1']}
          />
          <Text
            tag="span"
            text={props.fields.text7}
            className={styles['text07']}
          />
          <Text
            tag="span"
            text={props.fields.text8}
            className={styles['text08']}
          />
          <Text
            tag="span"
            text={props.fields.text9}
            className={styles['text09']}
          />
          <Text
            tag="span"
            text={props.fields.text10}
            className={styles['text10']}
          />
        </Container>
      </Container>
      <Container className={styles['container6']}>
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image2']}
        />
        <Container className={styles['container7']}>
          <RichText
            value={props.fields.value2}
            className={styles['richtext2']}
          />
          <RichText
            value={props.fields.value3}
            className={styles['richtext3']}
          />
        </Container>
      </Container>
    </Container>
  )
}

Footer.defaultProps = {
  fields: {
    text: 'Let’s Stay Connected',
    text1:
      'Join our mailing list for the latest news about our events, discounts and more',
    text2: 'First and Last Name',
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/5AuDzoiYIsVBwu9466XW2.svg',
    alt: 'Rectangle29323331',
    text3: 'Email Address:',
    src1: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/UD6eU-o_OViptZoss-Dgn.svg',
    alt1: 'Rectangle28264187',
    text4: 'Sign Up',
    text5: 'Site Map',
    value:
      '<span style="color: rgba(0, 0, 0, 1); \nwidth: 259px; \nheight: auto; \ntext-align: left; \nline-height: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 15px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \nfont-family: Lato; \nfont-size: 18px; \nfont-stretch: normal; \nfont-style: normal; \nfont-weight: 400; \ntext-decoration: none; \n"><span >Home</span><br /><span /></span>',
    text6: 'Program',
    value1:
      '<span style="color: rgba(0, 0, 0, 1); \nwidth: 259px; \nheight: auto; \ntext-align: left; \nline-height: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 15px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \nfont-family: Lato; \nfont-size: 18px; \nfont-stretch: normal; \nfont-style: normal; \nfont-weight: 400; \ntext-decoration: none; \n"><span >Speakers</span><br /><span /></span>',
    text7: 'Plan Your Trip',
    text8: 'About',
    text9: 'Sponsors',
    text10: 'Register',
    src2: 'https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/cAN4bXDTeXIf1F1viC76W.png',
    alt2: 'image128665',
    value2:
      '<span style="color: rgba(0, 0, 0, 1); \nwidth: 583px; \nheight: auto; \nfont-weight: 400; \nfont-family: Inter; \ntext-align: left; \nline-height: 150.52273273468018%; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 32px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Copyright © 2021 American Bankers Association. All rights reserved.</span><br /><span /></span>',
    value3:
      '<span style="color: rgba(144, 144, 144, 1); \nwidth: 583px; \nheight: auto; \nfont-weight: 400; \nfont-family: Inter; \ntext-align: center; \nline-height: 150.52273273468018%; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Privacy Policy | Terms of Service</span><br /><span /></span>',
  },
  rootClassName: '',
}

Footer.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Footer
