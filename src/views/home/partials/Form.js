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
    const { formLabels } = this.props;

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
            <HelpForm onSubmit={handleSubmit}>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder={formLabels && formLabels[0]}
                value={values.phone}
                onChange={e => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                error={errors['phone']}
                touched={touched['phone']}
                InputWrapperCss={InputWrapperCss}
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder={formLabels && formLabels[1]}
                value={values.email}
                onChange={e => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                error={errors['email']}
                touched={touched['email']}
                InputWrapperCss={InputWrapperCss}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder={formLabels && formLabels[2]}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors['password']}
                touched={touched['password']}
                InputWrapperCss={InputWrapperCss}
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
            </HelpForm>
          )}
        </Formik>
      </FormWrapper>
    );
  }
}

const submitButtonCss = css`
  padding: 16px 32px;
  border-radius: 2px;
  max-width: 160px;
  width: 100%;
`;

const HelpForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputWrapperCss = css`
  max-width: 370px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div``;

export default Form;
