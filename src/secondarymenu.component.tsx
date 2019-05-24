import * as React from 'react'
import ScrollMenu from './horizontal-scroller/index'
import styled from 'styled-components'
import { Heading } from './heading.component'
import { getColor } from './provider.component'

export const SecondaryMenu = props => {
  return (
    <StyledScrollMenu>
      <ScrollMenu
        alignCenter={false}
        data={props.entries.map((name, i) => {
          return (
            <div
              key={name}
              className={i === props.selectedIndex ? 'active' : ''}
            >
              <Heading level={3}>{name}</Heading>
            </div>
          )
        })}
        selected={props.entries[props.selectedIndex]}
        scrollToSelected={true}
        onSelect={x => {
          alert(x)
        }}
        arrowRight={<RightArrow />}
        arrowLeft={<LeftArrow />}
        hideSingleArrow={true}
        transition={0.8}
      />
    </StyledScrollMenu>
  )
}

const StyledScrollMenu = styled.div`
  h3 {
    user-select: none;
    padding: 0 0.5rem;
    margin: 0.7rem 0;
    cursor: pointer;
  }

  .active > h3 {
    color: black;
  }

  .menu-wrapper--inner > div:not(:last-child) {
    border-right: 1px solid ${getColor('lighterblue')};
  }

  .menu-item-wrapper {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  .scroll-menu-arrow--disabled {
    opacity: 0.1;
  }
`
const RightArrow = () => {
  return (
    <StyledArrow>
      <span>{'►'}</span>
    </StyledArrow>
  )
}

const LeftArrow = () => {
  return (
    <StyledArrow>
      <span>{'◀'}</span>
    </StyledArrow>
  )
}

const StyledArrow = styled.div`
  color: ${getColor('lightblue')};
  span {
    display: inline-block;
    transform: scale(0.5, 3);
    cursor: pointer;
    user-select: none;
  }
`
