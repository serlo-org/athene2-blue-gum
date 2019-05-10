import * as React from 'react'
import * as Grommet from 'grommet'

export function Image(props) {
  return (
    <div>
      <Grommet.Image fit="contain" src={props.src} />
      <br />
      <Grommet.Text color="light-6">{props.caption}</Grommet.Text>
    </div>
  )
}
