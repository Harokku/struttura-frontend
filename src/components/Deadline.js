import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import DeadlineLabel from './DeadlineLabel'
import {Button, Label, Segment, Popup, Header, List} from 'semantic-ui-react';

const Deadline = (props) => (
  <Popup on={['click', 'hover']}
         trigger={
           <DeadlineLabel
             name={props.deadlineName}
             expiredate={props.expiredate}
             color={deadLineColor(props.expiredate)}
           />}
         flowing
         hoverable>
    <Header>{props.deadLineHeader}</Header>

    {listInstructions(props.instructions)}

    <Button primary>Iscriviti</Button>
  </Popup>
);

const listInstructions = (instructions) => (
  instructions.map((instruction, index) => (
    <Segment raised key={index}>
      <Label color='orange' ribbon>{instruction.label}</Label>
      {instructionBody(instruction.body)}
    </Segment>
  ))
);

const instructionBody = (instruction) => (
  instruction.map((item, index) => (
    <List divided relaxed key={index}>
      <List.Item>{item}</List.Item>
    </List>
  ))
);

const deadLineColor = (expiredate) => (
  moment(expiredate).isBefore(moment(), 'day') ? 'red' : 'teal'
);

Deadline.propTypes = {
  deadlineName: PropTypes.string.isRequired,
  deadLineHeader: PropTypes.string.isRequired,
  expiredate: PropTypes.string.isRequired,
  instructions: PropTypes.array.isRequired,
};

export default Deadline;