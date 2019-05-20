import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import { Header } from '../src/header'
import { SearchInput } from '../src/header/searchinput'
import { Footer } from '../src/footer'
import { Nav } from '../src/footer/nav'
import { MobileMenuButton } from '../src/header/mobilemenubutton'
import { EditBox } from '../src/editbox.component'

// import { Icon } from '../src/icon.component'
import { Provider, GlobalStyle } from '../src/provider.component'
import { Normalize } from 'styled-normalize'
import { Box, Anchor } from 'grommet'
import { Heading } from '../src/heading.component'
import { Breadcrumb } from '../src/breadcrumb.component'

import {
  articleContent,
  topNavLinks,
  footerNavEntries,
  serloSlogan
} from './dummycontent'

storiesOf('Header', module)
  .add('SearchInput', () => {
    return (
      <Provider>
        <Normalize />
        <GlobalStyle />
        <div
          style={{
            backgroundColor: '#007ec1',
            padding: '3rem',
            height: '15rem'
          }}
        >
          <SearchInput />
        </div>
      </Provider>
    )
  })
  .add('Mobile Menu Button', () => {
    return (
      <Provider>
        <Normalize />
        <GlobalStyle />
        <div
          style={{
            backgroundColor: '#007ec1',
            padding: '3rem',
            height: '15rem'
          }}
        >
          <p style={{ position: 'relative' }}>
            <MobileMenuButton open={false} />
          </p>
          <p style={{ position: 'relative', top: '2rem' }}>
            <MobileMenuButton open={true} />
          </p>
        </div>
      </Provider>
    )
  })
  .add('All', () => {
    return (
      <Provider>
        <Normalize />
        <GlobalStyle />
        <Header links={topNavLinks} />
      </Provider>
    )
  })

storiesOf('Footer', module)
  .add('complete', () => {
    return (
      <Provider>
        <Normalize />
        <GlobalStyle />
        <Footer navEntries={footerNavEntries} slogan={serloSlogan} />
      </Provider>
    )
  })
  .add('only nav', () => {
    return (
      <Provider>
        <Normalize />
        <GlobalStyle />
        <footer>
          <Nav navEntries={footerNavEntries} />
        </footer>
      </Provider>
    )
  })

storiesOf('Example Page', module).add('test', () => {
  return (
    <Provider>
      <Normalize />
      <GlobalStyle />
      <Header links={topNavLinks} />

      <Box direction="row-responsive" justify="center">
        <StyledContent
          pad="large"
          alignSelf="center"
          width="large"
          style={{ opacity: 1 }}
        >
          <Breadcrumb aprop />

          <Heading level={1} icon="newspaper">
            Example Content
          </Heading>
          <p>
            Ein Kreis beschreibt die Menge aller Punkte, die denselben Abstand
            rr zum Mittelpunkt MM besitzen. In diesem Artikel lernst du die
            folgenden Formeln kennen:
          </p>

          <Heading level={2}>Zusammenfassung</Heading>
          <p>
            Ein Kreis beschreibt die Menge aller Punkte, die denselben Abstand
            rr zum Mittelpunkt MM besitzen. In diesem Artikel lernst du die
            folgenden Formeln kennen:
          </p>

          <Heading level={2}>Zusammenfassung</Heading>
          <p>
            Ein Kreis beschreibt die Menge aller Punkte, die denselben Abstand
            rr zum Mittelpunkt MM besitzen. In diesem Artikel lernst du die
            folgenden Formeln kennen:
          </p>

          <Heading level={2}>Zusammenfassung</Heading>
          <p>
            Ein Kreis beschreibt die Menge aller Punkte, die denselben Abstand
            rr zum Mittelpunkt MM besitzen. In diesem Artikel lernst du die
            folgenden Formeln kennen:
          </p>

          <Heading level={2}>Zusammenfassung</Heading>
          <p>
            Ein Kreis beschreibt die Menge aller Punkte, die denselben Abstand
            rr zum Mittelpunkt MM besitzen. In diesem Artikel lernst du die
            folgenden Formeln kennen:
          </p>
          <p>
            Den <Anchor href="/36162">Umfang</Anchor> erhältst du durch Abrollen
            des <Anchor href="/36162">Kreises</Anchor>
            und messen der abgerollten{' '}
            <Anchor href="https://de.serlo.org/mathe/geometrie/grundbegriffe/geraden-strecken-halbgeraden/strecke">
              Strecke
            </Anchor>
            . Auf diese Weise kannst du die{' '}
            <Anchor href="/2107">Kreiszahl</Anchor> <b>π</b> definieren.
          </p>
          <p>
            In der Abbildung rechts siehst du, wie ein Kreis mit{' '}
            <Anchor href="/36162">Durchmesser</Anchor>
            <b>d=1</b> abgerollt wird.
          </p>
          <p>
            Sein Umfang beträgt
            <b>π</b>, also etwa <b>3,14</b>
          </p>
          <p>Für den Umfang findest du so den folgenden Zusammenhang: </p>
          <p>
            <b>U=2⋅r⋅π=d⋅π</b>
          </p>
        </StyledContent>
      </Box>
      <EditBox />

      <Footer navEntries={footerNavEntries} slogan={serloSlogan} />
    </Provider>
  )
})

const StyledContent = styled(Box)`
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
