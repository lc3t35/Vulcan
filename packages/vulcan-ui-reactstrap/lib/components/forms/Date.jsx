import React from 'react';
import { Input} from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const FormComponentDate = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="date" />

registerComponent('FormComponentDate', DateComponent);