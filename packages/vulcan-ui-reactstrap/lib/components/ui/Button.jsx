import React from 'react';
import { Button } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:lib';

const BootstrapButton = ({ children, variant, size,  ...rest }) => 
  <Button bsStyle={variant} bsSize={size} {...rest}>{children}</Button>

registerComponent('Button', BootstrapButton);