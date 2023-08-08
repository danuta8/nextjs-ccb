/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './QuotewithTwoCards.module.css'

const QuotewithTwoCards = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text
          text={props.fields.text}
          tag="p"
          className={` ${styles['text']} ${styles['paragraph-default']} `}
        />
      </Container>
      <Container
        className={` ${styles['container1']} ${styles['container-default']} `}
      >
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Text
          text={props.fields.text1}
          tag="p"
          className={` ${styles['text1']} ${styles['paragraph-default']} `}
        />
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
      </Container>
      <Container
        className={` ${styles['container2']} ${styles['container-default']} `}
      >
        <Image
          src={props.fields.src1}
          alt={props.fields.alt1}
          className={` ${styles['image1']} ${styles['image-default']} `}
        />
        <Text
          text={props.fields.text3}
          tag="p"
          className={` ${styles['text2']} ${styles['paragraph-default']} `}
        />
        <Link
          href={props.fields.href1}
          className={` ${styles['link1']} ${styles['link-default']} `}
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
