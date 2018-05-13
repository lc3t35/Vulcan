import React from 'react';
import { Alert } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:lib';

const BootstrapAlert = ({ children, variant,  ...rest }) => 
  <Alert bsStyle={variant} {...rest}>{children}</Alert>

registerComponent('Alert', BootstrapAlert);