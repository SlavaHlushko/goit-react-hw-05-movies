import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
const SearchForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={({ query }, { resetForm }) => {
        onSubmit(query);
        resetForm();
      }}
    >
      <Form>
        <Field type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
