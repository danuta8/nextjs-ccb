/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerInteriorPageRed.module.css'

const BannerInteriorPageRed = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        bgImage={props.fields.bgImage}
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          bgImage={props.fields.bgImage1}
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.fields.text}
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text1}
            tag="h1"
            className={` ${styles['text1']} ${styles['header-default']} `}
          />
          <Text
            text={props.fields.text2}
            tag="span"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

BannerInteriorPageRed.defaultProps = {
  fields: {
    bgImage: '',
    text: 'Conference for Community Bankers',
    text1: 'Heading',
    text2:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

BannerInteriorPageRed.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerInteriorPageRed
