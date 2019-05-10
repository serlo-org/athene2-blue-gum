import * as React from 'react'
import styled from 'styled-components'
// @ts-ignore
import LazyLoad from 'react-lazy-load'

interface ImageProps {
  maxWidth?: number
  src: string
  alt: string
  caption?: string
}

export function Image(props: ImageProps) {
  return (
    <ImgWrapper maxWidth={props.maxWidth ? props.maxWidth : 0}>
      <LazyLoad>
        <Img src={props.src} alt={props.alt} />
      </LazyLoad>
      <p style={{ color: '#D0D0D0' }}>{props.caption}</p>
    </ImgWrapper>
  )
}

const ImgWrapper = styled.div<{ maxWidth: number }>(props => {
  return {
    maxWidth: props.maxWidth > 0 ? props.maxWidth + 'px' : undefined,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 200
  }
})

const Img = styled.img({
  maxWidth: '100%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
})
