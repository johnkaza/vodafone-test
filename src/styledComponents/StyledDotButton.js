import styled from 'styled-components';

const StyledDotButton = styled.button`
  position: relative;
  background-color: transparent;
  border-color: transparent;
  font-size: 16px;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 8px;
    height: 8px;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -16px;
    border-radius: 50%;
    background-color: ${props => (props.bgColor ? props.bgColor : 'black')};
    visibililty: hidden;
    opacity: 0;
    transition: opacity 0.4s ease, background-color 0.4s ease;
  }

  &:hover {
    opacity: 0.7;

    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default StyledDotButton;
