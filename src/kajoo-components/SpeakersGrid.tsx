/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './SpeakersGrid.module.css'

const SpeakersGrid = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        />
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        />
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        />
        <Container
          className={` ${styles['container4']} ${styles['container-default']} `}
        />
      </Container>
    </Container>
  )
}

SpeakersGrid.defaultProps = {
  fields: {},
  rootClassName: '',
}

SpeakersGrid.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default SpeakersGrid
