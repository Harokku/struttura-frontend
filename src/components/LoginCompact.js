import React from 'react';
import PropTypes from 'prop-types'
import {Header, Icon} from 'semantic-ui-react';

const LoginCompact = (props) => (
  <Header as='h2'>
    <Icon name='user' circular/>
    <Header.Content>
      {props.surname} {props.name}
      <Header.Subheader>{props.role}</Header.Subheader>
    </Header.Content>
  </Header>
)

LoginCompact.propTypes = {
  surname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}

export default LoginCompact