import React, { Component } from 'react';
import { Formik } from 'formik';
import styled, { css } from 'styled-components';

import Input from 'atoms/Input';
import Button from 'styledComponents/Button';
import { validate } from 'helpers/validation';
import { colors } from 'helpers/theme';

class Form extends Component {
  static defaultProps = {
    defaultValues: {
      email: '',
      password: ''
    }
  };

  render() {
    return (
      <FormWrapper>
        <Formik
          initialValues={this.props.defaultValues}
          validationSchema={() => validate('helpForm')}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dirty,
            isValid
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={e => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                error={errors['email']}
                touched={touched['email']}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors['password']}
                touched={touched['password']}
              />
              <Actions className="">
                <Button
                  color={colors.white}
                  bgColor={colors.denim}
                  buttonCss={submitButtonCss}
                  type="submit"
                  disabled={!dirty || !isValid || isSubmitting}
                >
                  Sign in
                </Button>
              </Actions>
            </form>
          )}
        </Formik>
      </FormWrapper>
    );
  }
}

const submitButtonCss = css`
  padding: 16px 32px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div``;

export default Form;
