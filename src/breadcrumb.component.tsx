import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button.component'
import { getColor, lightenColor } from './provider.component'

import useWindowSize from '@rehooks/window-size'

import { Anchor } from 'grommet'

//TODO: Define Props when data structure from athene is clear

export function Breadcrumb(props) {
  const windowSize = useWindowSize()
  const showFull = windowSize.innerWidth > 900 ? true : false

  return (
    <div style={{ minHeight: '2rem' }}>
      {!showFull ? (
        <StyledButton
          label={'Übersicht Prozentrechnung'}
          className={props.className}
          a11yTitle={props.title}
          plain
          iconName={'faArrowCircleLeft'}
          size={1}
          backgroundColor={lightenColor('lighterblue', 0.18)}
          fontColor={getColor('brand')}
          activeBackgroundColor={getColor('brand')}
        />
      ) : (
        <BreadcrumbList>
          <StyledAnchor href="#">Mathematik </StyledAnchor> >&nbsp;
          <StyledAnchor href="#">Terme und Gleichungen</StyledAnchor> >&nbsp;
          <StyledAnchor href="#">Terme und Variablen</StyledAnchor> >&nbsp;
          <StyledAnchor href="#">
            Zusammenfassen, Ausmultiplizieren, Faktorisieren
          </StyledAnchor>
        </BreadcrumbList>
      )}
    </div>
  )
}

const BreadcrumbList = styled.div`
  position: absolute;
  left: 2rem;
  margin-top: -1.5rem;
  font-size: 1rem;
  color: #ddd;
`

const StyledAnchor = styled(Anchor)`
  color: ${getColor('brand')};
  font-weight: normal;
` as typeof Anchor

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 0;
  font-weight: bold;
` as typeof Button
