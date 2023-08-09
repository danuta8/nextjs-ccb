/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Notification2.module.css'

const Notification2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/79Wrm-iqjFs25NMbLRgPb.svg"
        alt="Rectangle48I28673377379"
        className={styles['image']}
      />
      <Text
        tag="span"
        text="EARLY BIRD DISCOUNT: Register by October to receive exclusive pricing. The deadline to register is December 31, 2023."
        className={styles['text']}
      />
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/bMfWpple3KasV0YqQEqHz.svg"
        alt="teenyiconsxsolidI28673377381"
        className={styles['image1']}
      />
    </Container>
  )
}

Notification2.defaultProps = {
  fields: {},
  rootClassName: '',
}

Notification2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Notification2
