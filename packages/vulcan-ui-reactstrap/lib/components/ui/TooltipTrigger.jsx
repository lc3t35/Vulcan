/*

children: the content of the tooltip
trigger: the component that triggers the tooltip to appear

*/
import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import { Tooltip, UncontrolledTooltip } from 'reactstrap';

const TooltipTrigger = ({ children, trigger, placement = 'top', ...rest }) => {
  const tooltip = <Tooltip id="tooltip">{children}</Tooltip>;

  return (
    <UncontrolledTooltip placement={placement} {...rest} overlay={tooltip}>
      {trigger}
    </UncontrolledTooltip>
  );
};

registerComponent('TooltipTrigger', TooltipTrigger);
