import {ImageProps} from 'react-native';
import {NameIconTypes} from '../../constants/Icons';

export interface IconOptionProps {
  icon: NameIconTypes;
  size?: number;
}

export interface IconProps extends ImageProps, IconOptionProps {}
