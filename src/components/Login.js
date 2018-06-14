import React from 'react';
import PropTypes from 'prop-types'
import LoginCompact from './LoginCompact'
import DeadlineLabel from './DeadlineLabel'
import {Button, Container, Label, Segment, Popup, Header, List, Divider} from 'semantic-ui-react';

const Login = (props) => (
  <Container text>
    <Segment>

      <LoginCompact surname={props.surname} name={props.name} role={props.role}/>

      <Divider horizontal>Info</Divider>

      <List>
        <List.Item>
          <List.Icon name='address card outline'/>
          <List.Content>
            <List.Header>Matricola</List.Header>
            <List.Description>{props.regNumber}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='phone square'/>
          <List.Content>
            <List.Header>Telefono</List.Header>
            <List.Description>{props.mobile}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail'/>
          <List.Content>
            <List.Header>Mail</List.Header>
            <List.Description>{props.mail}</List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Divider horizontal>Scadenze</Divider>

      <Segment color='red'>
        <Popup on={['click', 'hover']}
               trigger={<DeadlineLabel name='DAE' expiredate='2018-11-12' color='teal'/>}
               flowing
               hoverable>
          <Header>Certificazione DAE</Header>
          <p>
            Richiede esame di ricertificazione
          </p>
          <Button primary>Iscriviti</Button>
        </Popup>
        <Popup on={['click', 'hover']}
               trigger={<DeadlineLabel name='Patente 5' expiredate='2018-01-01' color='red'/>}
               flowing
               hoverable>
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

Login.propTypes = {
  surname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  regNumber: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired
}

export default Login;