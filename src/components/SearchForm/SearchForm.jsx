import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { StyledForm, StyledField } from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={({ query }, { resetForm }) => {
        onSearch(query);
        resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledField type="text" name="query"></StyledField>
        </label>
        <button type="submit"></button>
      </StyledForm>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
