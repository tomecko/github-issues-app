import React, { FunctionComponent } from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';

import { IconStar as IconStarSVG } from '../../../assets/icons';

interface IIconProps {
  full?: boolean;
  onClick?: Function;
  title?: string;
}

const Styled = styled(({ full, ...rest }) => <IconStarSVG {...rest} />)<IIconProps>`
  fill: ${props => props.full ? '#21233d' : '#fff'};
  fill-rule: evenodd;
  transition: fill .2s;
  ${props => props.full ? '' : 'stroke: #e0e0e0;'}
  ${props => props.onClick ? 'cursor: pointer;' : ''}
`;

export const IconStar: FunctionComponent<IIconProps> = props => {
  return (
    <Styled {...props} />
  );
}

IconStar.defaultProps = {
  full: true,
};

IconStar.propTypes = {
  full: bool,
  onClick: func,
  title: string,
};
