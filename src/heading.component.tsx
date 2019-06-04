import * as React from 'react'
import styled from 'styled-components'

import { Heading as GrommetHeading } from 'grommet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { getColor } from './provider.component'

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  icon?: IconDefinition
  color?: string
}

export const Heading: React.FunctionComponent<HeadingProps> = props => {
  const fontSizes = [1.66, 1.5, 1.3, 1.2, 1, 1]
  const fontSize = fontSizes[props.level - 1] + 'rem'

  return (
    <StyledHeading
      level={props.level.toString() as GrommetHeadingLevel}
      color={props.color}
      fontSize={fontSize}
    >
      {props.icon ? <Icon icon={props.icon} color="default" /> : null}

      {props.children}
    </StyledHeading>
  )
}

type GrommetHeadingLevel = '1' | '2' | '3' | '4' | '5' | '6'

interface StyledHeadingProps {
  fontSize: string
}

const StyledHeading = styled(GrommetHeading)`
  color: ${props => (props.color ? props.color : getColor('brand'))};
  font-size: ${(props: StyledHeadingProps) => props.fontSize};

  margin: 1.5em 0 0.6em;
`

const Icon = styled(FontAwesomeIcon)`
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.1em;
  margin-bottom: 0.075em;
`
