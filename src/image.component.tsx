import * as React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load'

export function Image(props) {
  return (
    <ImgWrapper maxWidth={props.maxWidth}>
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
