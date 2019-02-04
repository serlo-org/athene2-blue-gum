import * as React from 'react'
import styled from 'styled-components'
import { Box, Button, Heading, Text, Anchor, Grid, DropButton } from 'grommet'
import TextareaAutosize from 'react-textarea-autosize'
import * as moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faShare,
  faCog,
  faSortDown,
  faFlag,
  faCheck,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

import { UserContext, EntityContext } from './context'

const outerBorderColor = '#2e6da4'
const innerBorderColor = '#46b8da'
const BoxStyle = styled(Box)({
  height: '10px',
  border: `5px solid ${outerBorderColor}`,
  borderTop: `0px `
})
const TextareaStyle = styled(TextareaAutosize)({
  border: 'none',
  outline: 'none',
  overflow: 'hidden',
  resize: 'none',
  paddingLeft: '10px',
  paddingRight: '10px'
})

const SpanStyle = styled.span({
  cursor: 'help',
  borderBottom: '1px dotted #777',
  color: '#979797'
})

const ButtonStyle = styled(Button)({
  // ToDo : Maße absolut
  height: '22px',
  width: '37px',
  borderRadius: '0',
  border: '1px solid rgb(173,173,173)',
  textAlign: 'center',
  verticalAlign: 'middle'
})

const renderItems = (leaf: boolean | undefined) => (
  <Box>
    {leaf ? null : (
      <Button>
        <FontAwesomeIcon
          icon={faCheck}
          style={{ padding: '5px 5px 0px 5px' }}
          size="xs"
        />
        Diskussion archivieren
      </Button>
    )}
    <Button>
      <FontAwesomeIcon
        icon={faFlag}
        style={{ padding: '5px 5px 0px 5px' }}
        size="xs"
      />
      Diskussion melden
    </Button>
    <Button>
      <FontAwesomeIcon
        icon={faTrash}
        style={{ padding: '5px 5px 0px 5px' }}
        size="xs"
      />
      Diskussion löschen
    </Button>
  </Box>
)

export class CommentForm extends React.Component<
  CommentFormProps,
  { newCommentValue: string }
> {
  constructor(props: CommentFormProps) {
    super(props)
    this.state = { newCommentValue: '' }
  }
  render() {
    const { parent_id, onSendComment } = this.props
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <EntityContext.Consumer>
            {({ entity }) => (
              <React.Fragment>
                <Box margin={{ bottom: 'medium' }}>
                  <TextareaStyle
                    value={this.state.newCommentValue}
                    onChange={event => {
                      this.setState({ newCommentValue: event.target.value })
                    }}
                    placeholder="Frage oder Verbesserungsvorschlag"
                  />
                  <BoxStyle />
                </Box>
                <Button
                  label="Kommentar abschicken"
                  primary
                  onClick={() =>
                    onSendComment({
                      entity_id: entity.id,
                      parent_id: parent_id,
                      user_id: user.id,
                      user_name: user.username,
                      body: this.state.newCommentValue
                    })
                  }
                />
              </React.Fragment>
            )}
          </EntityContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
export function Comments({ data, onSendComment }: CommentsProps) {
  return (
    <React.Fragment>
      <Box pad="medium">
        <Heading level="2">Kommentare</Heading>
        <CommentForm parent_id="" onSendComment={onSendComment} />
        {data
          ? data.map(comment => {
              return (
                <Comment
                  key={comment.id}
                  {...comment}
                  onSendComment={onSendComment}
                />
              )
            })
          : null}
      </Box>
    </React.Fragment>
  )
}

function Comment({
  id,
  author,
  body,
  children,
  timestamp,
  leaf,
  entity,
  onSendComment
}: CommentProps) {
  console.log(onSendComment)
  return (
    <React.Fragment>
      <Grid
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'buttons', start: [0, 0], end: [0, 0] },
          { name: 'content', start: [1, 0], end: [1, 0] }
        ]}
      >
        <Box gridArea="buttons">
          <Box
            background={{ color: leaf ? innerBorderColor : outerBorderColor }}
            pad="medium"
            margin={{ vertical: 'small' }}
            align="center"
          >
            <FontAwesomeIcon
              icon={leaf ? faShare : faComments}
              size="lg"
              color="white"
            />
          </Box>
          <DropButton
            dropAlign={{ top: 'bottom', left: 'left' }}
            dropContent={renderItems(leaf)}
          >
            <FontAwesomeIcon icon={faCog} size="xs" />
            <FontAwesomeIcon icon={faSortDown} size="xs" />
          </DropButton>
        </Box>
        <Box
          gridArea="content"
          pad={{ horizontal: 'medium' }}
          margin={{ vertical: 'small' }}
          border={{
            side: 'right',
            color: leaf ? innerBorderColor : outerBorderColor,
            size: 'medium'
          }}
        >
          {entity !== undefined ? (
            <Text margin={{ bottom: 'small' }}>
              Zu{' '}
              <Anchor href={`https://serlo.org/${entity.id}`}>
                {entity.label}
              </Anchor>
              :
            </Text>
          ) : null}
          <Text margin={{ bottom: 'small' }} size={'85%'}>
            <Anchor href={`https://serlo.org/${author.id}`}>
              {' '}
              {author.username}
            </Anchor>{' '}
            <SpanStyle
              title={moment(timestamp)
                .locale('de')
                .format('DD.MM.YYYY, HH:mm:ss ')}
            >
              {moment(timestamp)
                .locale('de')
                .startOf()
                .fromNow()}
            </SpanStyle>
          </Text>
          {body}
          {children && !leaf
            ? children.map(comment => {
                return (
                  <Comment
                    key={comment.id}
                    leaf
                    onSendComment={onSendComment}
                    {...comment}
                  />
                )
              })
            : null}
          {leaf || entity === undefined ? null : (
            <CommentForm parent_id={id} onSendComment={onSendComment} />
          )}
        </Box>
      </Grid>
    </React.Fragment>
  )
}

interface CommentsProps {
  data: Comment[]
  entity: Entity
  user: User
  onSendComment: (props: SendProps) => void
}

interface SendProps {
  entity_id: string
  parent_id: string
  user_id: string
  user_name: string
  body?: string
}
interface CommentFormProps {
  parent_id: string
  onSendComment: (props: SendProps) => void
}

interface CommentProps extends Comment {
  leaf?: boolean
  onSendComment?: (props: SendProps) => void
}

interface Comment {
  id: string
  author: User
  body: string
  children?: Comment[]
  timestamp: Date
  entity?: Entity
}

interface User {
  id: string
  username: string
}

interface Entity {
  id: string
  label: string
}
