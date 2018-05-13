import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const EmailComponent = ({refFunction, inputProperties, ...properties}) => <Input {...inputProperties} ref={refFunction} type="email" />

registerComponent('FormComponentEmail', EmailComponent);