import * as yup from 'yup'; // for everything

const validationSections = {
  helpForm: yup.object().shape({
    phone: yup
      .string()
      .trim()
      .required('Phone is required'),
    email: yup
      .string()
      .trim()
      .email()
      .required('Email is required'),
    password: yup
      .string()
      .trim()
      .min(8, 'Password must have be at least 8 characters')
      .matches(/[@$!%*#?&]/, 'Password must have at least one special case character')
      .matches(/[0-9]/, 'Password must have at least one number')
      .matches(/[a-z]/, 'Password must have at least one lowercase character')
      .matches(/[A-Z]/, 'Password must have at least one uppercase character')
      .required('Password is required')
  })
};

const regex = {};

export const regexValidate = (type, value) => {
  return regex[type].test(value);
};

export const validate = type => {
  return validationSections[type];
};
