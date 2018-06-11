import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const LoginCompact = () => (
  <Header as='h2'>
    <Icon name='user' circular/>
    <Header.Content>
      Crenna Simone
      <Header.Subheader>Dipendente</Header.Subheader>
    </Header.Content>
  </Header>
)

export default LoginCompact