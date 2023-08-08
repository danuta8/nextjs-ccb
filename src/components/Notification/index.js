/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Notification = (props) => {
  return (
    <Container className={`notification-root ${props.rootClassName} `}>
      <Container className="notification-container notification-container-default">
        <Text
          text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."
          tag="span"
          className="notification-paragraph-default notification-text"
        />
      </Container>
      <Container className="notification-container1 notification-container-default">
        <Image
          src={props.fields.src3}
          alt={props.fields.alt3}
          className="notification-image-default notification-image"
        />
      </Container>
    </Container>
  )
}

Notification.defaultProps = {
  fields: {
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    src1: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
    src2: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt2: 'default-kajoo-imag',
    src3: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt3: 'default-kajoo-imag',
  },
  rootClassName: '',
}

Notification.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Notification
