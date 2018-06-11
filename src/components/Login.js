import React from 'react';
import LoginCompact from './LoginCompact'
import DeadlineLabel from './DeadlineLabel'
import {Button, Container, Label, Segment, Popup, Header, List, Divider} from 'semantic-ui-react';

const Login = () => (
  <Container text>
    <Segment>

      <LoginCompact/>

      <Divider horizontal>Info</Divider>

      <List>
        <List.Item>
          <List.Icon name='address card outline'/>
          <List.Content>
            <List.Header>Matricola</List.Header>
            <List.Description>823</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='phone square'/>
          <List.Content>
            <List.Header>Telefono</List.Header>
            <List.Description>+39 349 1065 428</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail'/>
          <List.Content>
            <List.Header>Mail</List.Header>
            <List.Description>crenna.simone@gmail.com</List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Divider horizontal>Scadenze</Divider>

      <Segment color='red'>
        <Popup on={['click', 'hover']} trigger={<DeadlineLabel name='DAE' expiredate='2018-06-12' color='teal'/>}
               flowing hoverable>
          <Header>Certificazione DAE</Header>
          <p>
            Richiede esame di ricertificazione
          </p>
          <Button primary>Iscriviti</Button>
        </Popup>
        <Popup on={['click', 'hover']} trigger={<DeadlineLabel name='Patente 5' expiredate='2018-01-01' color='red'/>}
               flowing hoverable>
          <Header>Patente di guida CRI</Header>
          <Segment raised>
            <Label color='orange' ribbon>Documenti necessari</Label>
            <List divided relaxed>
              <List.Item>2 Fototessere</List.Item>
              <List.Item>Carta d'identità</List.Item>
            </List>
          </Segment>
          <Segment raised>
            <Label color='blue' ribbon>Esami necessari</Label>
            <List divided relaxed>
              <List.Item>Visita Medica</List.Item>
              <List.Item>Prova riflessi</List.Item>
            </List>
          </Segment>
          <Button primary>Iscriviti</Button>
        </Popup>
      </Segment>

    </Segment>
  </Container>
)

export default Login;