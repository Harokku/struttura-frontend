import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/it'
import {Label} from 'semantic-ui-react';

const DeadlineLabel = (props) => (
  <Label {...props} as='a' color={props.color} image>
    {props.name}
    <Label.Detail>{prettyDateFromNow(props.expiredate)}</Label.Detail>
  </Label>
)

const prettyDateFromNow = (expireDate) => {
  moment.locale('it');
  const momentFromNow = moment(expireDate).isBefore(moment(), 'day')
    ? 'Scaduto'
    : moment(expireDate).fromNow();
  return momentFromNow
}

DeadlineLabel.propTypes = {
  name: PropTypes.string.isRequired,
  expiredate: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default DeadlineLabel;