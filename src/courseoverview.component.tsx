import * as React from 'react'
import { getColor } from './provider.component'
import { Icon } from './icon.component'
import { Heading } from './heading.component'
import useWindowSize from '@rehooks/window-size'
import { MobileMenuButton } from './header/mobilemenubutton'
import { Button } from './button.component'

export function CourseOverview(props) {
  const windowSize = useWindowSize()
  const showFull = windowSize.innerWidth > 550 ? true : false
  let [isExpanded, setExpanded] = React.useState(false)

  return (
    <div
      style={{
        backgroundColor: getColor('bluewhite'),
        padding: '0 20px 0 20px',
        maxHeight: 300,
        overflowY: 'scroll'
      }}
    >
      <Heading level={1}>
        <Icon icon="faGraduationCap" /> Einführung des Prozentzeichens und
        seiner Umrechnung
        <br />
      </Heading>
      {isExpanded || showFull ? (
        <ol>
          <li>Einleitung</li>
          <li>Prozente aus dem Alltag</li>
          <li>Prozent - Eine neue Zahldarstellung</li>
          <li>Prozentzahlen über 100%</li>
          <li>Umformungen von Prozentzahlen und Dezimalzahlen</li>
          <li>
            Übungsaufgaben zur Umrechnung von Prozentzahlen und Dezimalzahlen
          </li>
          <li>Umrechnung von Prozentzahlen und Bruchzahlen</li>
        </ol>
      ) : (
        <Button
          iconName="faBars"
          label="Kursübersicht anzeigen"
          secondary
          color="lighterblue"
          style={{ marginBottom: '3rem' }}
          onClick={() => {
            setExpanded(!isExpanded)
          }}
        />
      )}
    </div>
  )
}
