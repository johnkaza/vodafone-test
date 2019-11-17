import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from 'helpers/theme';

class Input extends Component {
  render() {
    const { type, name, label, id, error, touched, className, ...rest } = this.props;

    return (
      <InputWrapper className={`form-group ${className ? className : ''}`}>
        {label && id && <label for={id}>Email address</label>}
        <StyledInput name={name} type={type} {...rest} />
        {error && touched && id && <Error id={id}>{error}</Error>}
      </InputWrapper>
    );
  }
}

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 8px 16px;
  border: none;
  background-color: ${colors.wildSand};

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Error = styled.small`
  width: 100%;
  margin: 8px 0 8px 0px;

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

export default Input;
