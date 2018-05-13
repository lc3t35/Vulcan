import React from 'react';
import { Alert } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:lib';

const BootstrapAlert = ({ children, variant,  ...rest }) => 
  <Alert color={variant} {...rest}>{children}</Alert>

registerComponent('Alert', BootstrapAlert);