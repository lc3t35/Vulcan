import React from 'react';
import { Input } from 'reactstrap';
import { registerComponent } from 'meteor/vulcan:core';

const UrlComponent = ({refFunction, inputProperties, ...properties}) => <Input ref={refFunction} {...inputProperties} type="url" />

registerComponent('FormComponentUrl', UrlComponent);