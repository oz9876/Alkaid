
import './index.scss' 


import Button from './button';
import Input from './input';
import Box from './box';
import Col from './col';

export { default as Button } from './button';
export { default as Input } from './input';
export { default as Col } from './box';

const UI = {
    Button,
    Input,
    Box,
    Col
  };

export const UIList=[
  'Button',
  'Input',
  'Box',
  'Col'
]
export default UI
