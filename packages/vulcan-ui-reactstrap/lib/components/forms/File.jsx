import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const FileComponent = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="file"/>

registerComponent('FormComponentFile', FileComponent);