import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from 'helpers/theme';

class Input extends Component {
  render() {
    const {
      type,
      name,
      label,
      id,
      error,
      touched,
      InputWrapperCss,
      InputCss,
      ...rest
    } = this.props;

    return (
      <InputWrapper InputWrapperCss={InputWrapperCss}>
        {label && id && <label for={id}>Email address</label>}
        <StyledInput InputCss={InputCss} name={name} type={type} {...rest} />
        {error && touched && id && <Error id={id}>{error}</Error>}
      </InputWrapper>
    );
  }
}

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;

  ${props => (props.InputWrapperCss ? props.InputWrapperCss : '')};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 8px 16px;
  border: none;
  background-color: ${colors.wildSand};
  border-radius: 2px;
  font-size: 15px;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  ${props => (props.InputCss ? props.InputCss : '')};
`;

const Error = styled.small`
  display: inline-block;
  width: 100%;
  margin: 8px 0 0 0;
  color: red;

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

export default Input;
