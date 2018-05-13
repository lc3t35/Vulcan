import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const CheckboxComponent = ({refFunction, inputProperties, ...properties}) => <Input {...inputProperties} ref={refFunction} type="checkbox"/>

registerComponent('FormComponentCheckbox', CheckboxComponent);