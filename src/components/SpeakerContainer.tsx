/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './SpeakerContainer.module.css'

const SpeakerContainer = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src4}
            alt={props.fields.alt4}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text4}
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text3}
            tag="span"
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text2}
            tag="span"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src5}
            alt={props.fields.alt5}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text12}
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text16}
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text17}
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Image
            src={props.fields.src6}
            alt={props.fields.alt6}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Text
            text={props.fields.text13}
            className={` ${styles['text6']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text14}
            className={` ${styles['text7']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.fields.text15}
            className={` ${styles['text8']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

SpeakerContainer.defaultProps = {
  fields: {
    src: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt: 'default-kajoo-imag',
    src1: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt1: 'default-kajoo-imag',
    src2: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt2: 'default-kajoo-imag',
    text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    src3: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt3: 'default-kajoo-imag',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag: 'span',
    src4: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt4: 'default-kajoo-imag',
    src5: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt5: 'default-kajoo-imag',
    tag1: 'span',
    text6:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag2: 'span',
    text7:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag3: 'span',
    src6: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt6: 'default-kajoo-imag',
    text8:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag4: 'span',
    text9:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag5: 'span',
    text10:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    tag6: 'span',
    text4: 'Jane Doe',
    text5: 'John DOe',
    text11: 'Jane Doe',
    tag7: 'span',
    tag8: 'span',
    text2: 'Google',
    text3: 'Chief Executive Officer\n',
    text13: 'Jane Doe',
    tag9: 'span',
    text14: 'Chief Executive Officer\n',
    tag10: 'span',
    text15: 'Google',
    tag11: 'span',
    text16: 'Chief Executive Officer\n',
    tag12: 'span',
    text17: 'Google',
    tag13: 'span',
    text12: 'John Doe',
  },
  rootClassName: '',
}

SpeakerContainer.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default SpeakerContainer
