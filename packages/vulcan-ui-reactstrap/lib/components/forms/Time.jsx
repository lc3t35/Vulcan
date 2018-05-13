import React from 'react';
import { Input} from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const FormComponentTime = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="time" />

registerComponent('FormComponentTime', Time);