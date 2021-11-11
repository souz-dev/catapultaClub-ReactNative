import styled from 'styled-components/native';
import {IconProps} from './types';

export const Container = styled.Image<Partial<IconProps>>`
  min-width: ${({size}) => size}px;
`;
