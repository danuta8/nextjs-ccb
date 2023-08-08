/* eslint-disable */
import React from 'react'
import { Container, Text, Image, Link } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const QuotewithTwoCards = (props) => {
  return (
    <Container className={`quotewith-two-cards-root ${props.rootClassName} `}>
      <Container className="quotewith-two-cards-container quotewith-two-cards-container-default">
        <Text
          text={props.fields.text}
          tag="p"
          className="quotewith-two-cards-text quotewith-two-cards-paragraph-default"
        />
      </Container>
      <Container className="quotewith-two-cards-container1 quotewith-two-cards-container-default">
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className="quotewith-two-cards-image quotewith-two-cards-image-default"
        />
        <Text
          text={props.fields.text1}
          tag="p"
          className="quotewith-two-cards-text1 quotewith-two-cards-paragraph-default"
        />
        <Link
          href={props.fields.href}
          className="quotewith-two-cards-link quotewith-two-cards-link-default"
        />
      </Container>
      <Container className="quotewith-two-cards-container2 quotewith-two-cards-container-default">
        <Image
          src={props.fields.src1}
          alt={props.fields.alt1}
          className="quotewith-two-cards-image1 quotewith-two-cards-image-default"
        />
        <Text
          text={props.fields.text3}
          tag="p"
          className="quotewith-two-cards-text2 quotewith-two-cards-paragraph-default"
        />
        <Link
          href={props.fields.href1}
          className="quotewith-two-cards-link1 quotewith-two-cards-link-default"
        />
      </Container>
    </Container>
  )
}

QuotewithTwoCards.defaultProps = {
  fields: {
    text: 'Skate ipsum dolor sit amet,fsdfdaffasdf carve shoveit steps Jordan Richter pressure flip late.',
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    href: '#',
    text2: 'Link',
    src1: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
    text3:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    href1: '#',
    text4: 'Link',
  },
  rootClassName: '',
}

QuotewithTwoCards.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default QuotewithTwoCards
