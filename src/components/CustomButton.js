import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const Component = styled(Button)`
  background-color: ${colors.blueColor};
  margin-left: 5px;
`;

export default function CustomButton({ label, ...other }) {
  return <Component {...other}>{label}</Component>;
}
