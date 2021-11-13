import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const Component = styled(Card)`
  border: 5px solid black;
`;

export default function Frame({ label, ...other }) {
  return <Component {...other}>{label}</Component>;
}
