import React from 'react';
import Icons from '../../constants/Icons';

import {Container} from './styles';
import {IconProps} from './types';

const Icon = ({icon, size = 20}: Omit<IconProps, 'source'>) => {
  return <Container size={size} source={Icons[icon]} />;
};

export default Icon;
