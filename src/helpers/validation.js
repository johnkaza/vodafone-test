import * as yup from 'yup'; // for everything

const validationSections = {
  helpForm: yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required('Password is required')
  })
};

const regex = {};

export const regexValidate = (type, value) => {
  return regex[type].test(value);
};

export const validate = type => {
  return validationSections[type];
};
