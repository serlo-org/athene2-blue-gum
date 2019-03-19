import * as React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from './icon.component'

import {
  Button as GrommetButton,
  ButtonProps as grommetButtonProps,
  DropButton as GrommetDropButton
} from 'grommet'

import { getColor, getDefaultTransition } from './provider.component'

export interface ButtonProps extends grommetButtonProps {
  title?: string
  iconName?: string
  size?: 0.8 | 1.0 | 1.1 | 1.2 | 2.0 | 2.5 | 3.0
  active?: boolean
  fontColor?: string
  iconColor?: string
  activeIconColor?: string
  backgroundColor?: string
  activeFontColor?: string
  activeBackgroundColor?: string
  className?: string
}

Button.defaultProps = {
  active: false,
  title: '',
  size: 1.0,
  backgroundColor: getColor('brandGreen'),
  activeBackgroundColor: getColor('brand'),
  activeFontColor: '#fff',
  fontColor: '#fff',
  onClick: () => {}
}

export function Button(props: ButtonProps) {
  return (
    <ButtonWrap size={props.size}>
      <StyledButton
        {...props}
        className={props.className}
        a11yTitle={props.title}
        plain
        icon={
          props.iconName ? (
            <StyledIcon
              color={props.iconColor}
              activeColor={props.activeIconColor}
              active={props.active}
              label={props.label}
              icon={props.iconName}
            />
          ) : (
            undefined
          )
        }
      />
    </ButtonWrap>
  )
}

export function DropButton(props: ButtonProps) {
  return (
    <ButtonWrap size={props.size}>
      <StyledButton
        {...props}
        className={props.className}
        a11yTitle={props.title}
        plain
        icon={
          props.iconName ? (
            <StyledIcon
              color={props.iconColor}
              activeColor={props.activeIconColor}
              active={props.active}
              label={props.label}
              icon={props.iconName}
            />
          ) : (
            undefined
          )
        }
        as={GrommetDropButton}
      />
    </ButtonWrap>
  )
}

const ButtonWrap = styled.div`
  display: inline-block;

  font-size: ${({ size }: { size?: number }) => size + 'rem'};
`

const StyledButton = styled(GrommetButton)`
  font-size: 1em;

  display: block;
  border-radius: 5em;
  width: 2.5em;
  height: 2.5em;
  padding: 0;
  text-align: center;

  transition: ${getDefaultTransition()};

  color: ${props =>
    props.active && props.activeFontColor
      ? props.activeFontColor
      : props.fontColor};
  background-color: ${props =>
    props.active ? props.activeBackgroundColor : props.backgroundColor};

  &:hover {
    color: ${props =>
      !props.active ? props.activeFontColor : props.fontColor};
    background-color: ${props =>
      !props.active ? props.activeBackgroundColor : props.backgroundColor};
  }

  ${props =>
    props.label &&
    css`
      width: auto;
      height: auto;
      padding: 0.2em 0.4em;
    `}
`

export const StyledIcon = styled(Icon)`
  width: 1.5em !important;
  height: 1.5em !important;
  vertical-align: -0.4em;

  color: ${props => (props.active ? props.activeColor : props.color)};

  /* transition: ${getDefaultTransition()}; */

  ${StyledButton}:hover &{
    color: ${props => (!props.active ? props.activeColor : props.color)};
    background-color: ${props =>
      !props.active ? props.activeBackgroundColor : props.backgroundColor};
  }

  ${({ label }: { label?: string }) =>
    label &&
    css`
      width: 0.9em !important;
      height: 0.9em !important;
      vertical-align: -0.6em;
    `}
`
