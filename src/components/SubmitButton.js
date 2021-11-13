import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const Component = styled(Button)`
  background-color: "#FFF";
  border: 5px solid black;
  width: 100px;
  height: 50px;
`;

export default function SubmitButton({ label, ...other }) {
  return <Component {...other}>{label}</Component>;
}
