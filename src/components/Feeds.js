import React from 'react'
import PropTypes from 'prop-types'
import {Container, Feed, Header, Icon} from 'semantic-ui-react'

import {prettyDateInPast} from '../helpers/dateHelpers'

const Feeds = (props) => (
  <Container text>
    <Header as='h3' icon textAlign='center'>
      <Icon name='feed' circular/>
      <Header.Content>Comunicazioni</Header.Content>
    </Header>

    {listFeeds(props.feeds)}

  </Container>
)

const listFeeds = (feeds) => (
  feeds.map((feed, index) => (
    <Feed key={index}>
      <Feed.Event>
        <Feed.Label><Icon name={feed.icon}/></Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{feed.user}</Feed.User>
            <Feed.Date>{prettyDateInPast(feed.date)}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>{feed.message}</Feed.Extra>
          <Feed.Meta as='a'>{feed.link}</Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  ))
)

Feeds.propTypes = {
  feeds: PropTypes.array.isRequired
}

export default Feeds