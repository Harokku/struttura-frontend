import React from 'react';
import PropTypes from 'prop-types'
import {Label} from 'semantic-ui-react';

import {prettyDateInFuture} from '../helpers/dateHelpers'

const DeadlineLabel = (props) => (
  <Label {...props} as='a' color={props.color} image>
    {props.name}
    <Label.Detail>{prettyDateInFuture(props.expiredate)}</Label.Detail>
  </Label>
)

DeadlineLabel.propTypes = {
  name: PropTypes.string.isRequired,
  expiredate: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default DeadlineLabel;