import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const PasswordComponent = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="password" />

registerComponent('FormComponentPassword', PasswordComponent);