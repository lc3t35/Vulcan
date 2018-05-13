import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const TextareaComponent = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="textarea"/>

registerComponent('FormComponentTextarea', TextareaComponent);