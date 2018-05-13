import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const RadioComponent = ({refFunction, inputProperties, ...properties}) => <Input {...inputProperties} ref={refFunction} type="radio"/>

registerComponent('FormComponentRadio', RadioComponent);
