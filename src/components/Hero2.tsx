/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Hero2.module.css'

const Hero2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container className={styles['container2']}>
            <Container
              className={` ${styles['container3']} ${styles['container-default']} `}
            >
              <Text
                text={props.fields.text}
                tag="h1"
                className={` ${styles['text']} ${styles['header-default']} `}
              />
              <Text
                text={props.fields.text1}
                tag="span"
                className={` ${styles['text1']} ${styles['paragraph-default']} `}
              />
              <Text
                text={props.fields.text2}
                tag="span"
                className={` ${styles['text2']} ${styles['paragraph-default']} `}
              />
              <Button
                link={props.fields.link}
                className={` ${styles['button']} ${styles['button-default']} `}
              />
            </Container>
          </Container>
          <Container
            className={` ${styles['container4']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Hero2.defaultProps = {
  fields: {
    text: 'Empowering Community \nBankers',
    text1: 'February 11-13, 2024 San Antonio',
    text2:
      'The Conference for Community Bankers is a dynamic gathering where industry leaders, experts, and professionals unite to explore the latest trends, strategies, and innovations in the banking sector.',
    text3: 'REGISTER',
    link: '#',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
  },
  rootClassName: '',
}

Hero2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Hero2
