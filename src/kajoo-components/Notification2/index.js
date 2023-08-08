/* eslint-disable */
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const Notification2 = (props) => {
  return (
    <Container className={`notification2-root ${props.rootClassName} `}>
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/79Wrm-iqjFs25NMbLRgPb.svg"
        alt="Rectangle48I28673377379"
        className="notification2-image"
      />
      <Text
        tag="span"
        text="EARLY BIRD DISCOUNT: Register by October to receive exclusive pricing. The deadline to register is December 31, 2023."
        className="notification2-text"
      />
      <Image
        src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/bMfWpple3KasV0YqQEqHz.svg"
        alt="teenyiconsxsolidI28673377381"
        className="notification2-image1"
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
