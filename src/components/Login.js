import React from 'react';
import PropTypes from 'prop-types'
import LoginCompact from './LoginCompact'
import DeadlineLabel from './DeadlineLabel'
import DeadLine from './Deadline'
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
        <List.Item>
          <List.Icon name='drivers license'/>
          <List.Content>
            <List.Header>Patente</List.Header>
            <List.Description>{props.driverLicense ? props.driverLicense : 'Patente non conseguita'}</List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Divider horizontal>Scadenze</Divider>

      <Segment color='red'>
        {props.deadLines.map((deadLine, index) => (
          <DeadLine
            key={index}
            deadlineName={deadLine.deadLineName}
            deadLineHeader={deadLine.deadLineHeader}
            expiredate={deadLine.expiredate}
            instructions={deadLine.instructions}
          />
        ))}
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
  mail: PropTypes.string.isRequired,
  driverLicense: PropTypes.string,
  deadLines: PropTypes.array
}

export default Login;