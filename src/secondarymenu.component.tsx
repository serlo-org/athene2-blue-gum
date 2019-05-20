import * as React from 'react'
// @ts-ignore
import ScrollMenu from 'react-horizontal-scrolling-menu'
import styled from 'styled-components'
import { Heading } from './heading.component'
import { getColor } from './provider.component'

export const SecondaryMenu = props => {
  return (
    <StyledScrollMenu>
      <ScrollMenu
        alignCenter={false}
        data={props.entries.map(name => {
          return (
            <div key={name}>
              <Heading level={3} onClick={() => {}}>
                {name}
              </Heading>
            </div>
          )
        })}
      />
    </StyledScrollMenu>
  )
}

const StyledScrollMenu = styled.div`
  h3 {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
    padding: 0 0.5rem;
    margin: 0.7rem 0;
  }

  .menu-wrapper--inner div:not(:last-child) {
    border-right: 1px solid ${getColor('lighterblue')};
  }

  a {
    text-decoration: none;
  }
`
