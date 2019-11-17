import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  border-color: transparent;
  color: ${props => (props.color ? props.color : 'white')};
  font-size: 16px;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.7;
  }

  ${props => (props.buttonCss ? props.buttonCss : '')};
`;

export default Button;
