import Validator from '../validator.js';

const togetherLetsValidator = ({ title }) => {
  const errors = {};

  const titleValidator = new Validator(title)
    .required('Required fields')
    .min(2, 'Minimum length 2 characters')
    .max(32, 'Maximum length 32 characters');
  if (titleValidator.hasErrors) errors.title = titleValidator.HTMLError;

  return errors;
}

export default togetherLetsValidator;
