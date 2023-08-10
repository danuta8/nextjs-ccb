/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BannerInteriorPageBlue.module.css'

const BannerInteriorPageBlue = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
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

BannerInteriorPageBlue.defaultProps = {
  fields: {
    text1: 'Heading',
    text: 'Conference for Community Bankers',
    text2:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
}

BannerInteriorPageBlue.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BannerInteriorPageBlue
