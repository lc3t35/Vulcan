import React from 'react';
import { Input} from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const FormComponentDateTime = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="datetime" />

registerComponent('FormComponentDateTime', DateTime);