/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Notification.module.css'

const Notification = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className={` ${styles['paragraph-default']} ${styles['text']} `}
        />
      </Container>
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Image
          src="https://app.kajoo.ai/icons/default-imag.svg"
          alt="default-kajoo-imag"
          className={` ${styles['image-default']} ${styles['image']} `}
        />
      </Container>
    </Container>
  )
}

Notification.defaultProps = {
  fields: {},
  rootClassName: '',
}

Notification.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Notification
