import styled from 'styled-components';
import { rgba } from 'polished';

const Button = styled.button`
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  border-color: transparent;
  color: ${props => (props.color ? props.color : 'white')};
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }

  &:hover {
    background: ${props => (props.bgColor ? rgba(props.bgColor, 0.85) : 'transparent')};
  }

  ${props => (props.buttonCss ? props.buttonCss : '')};
`;

export default Button;
