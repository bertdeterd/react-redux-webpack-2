import React, {PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
/*
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}
*/

/*
const renderField = field => (
  <div>
    <label>{field.input.placeholder}</label>
    <div>
      <input {...field.input}/>
      {field.touched && field.error && <span>{field.error}</span>}
    </div>
  </div>
)

 /*<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>

*/

let ContactForm = (props) => {
    let xx = 'AA';
  const {  handleSubmit } = props; //handleSubmit is supplied as onSubmit in parent 

/*
 const _handleSubmit = (e) => {
    console.log(e);
  };
*/

  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" type="text" component="input" placeholder="Case Title"/>
      <Field name="title" type="text" component="input" placeholder="Email"/>
      <div>
        <button type="submit" >Submit</button>
   
      </div>
    </form>
  );
};

ContactForm.propTypes = {
    handleSubmit: PropTypes.func, 
    actions: PropTypes.object//,
    //selected: PropTypes.object
};

ContactForm = reduxForm({
  form: 'contact'  // a unique identifier for this form
  //validate                 // <--- validation function given to redux-form
})(ContactForm);

/*
function mapStateToProps(state, ownProps) {
    return {
        //initialValues: state.caseTypes.selected,
        caseTypes: state.caseTypes//, //state.courses comes from rootReducer
        //selected: state.caseTypes.selected
    };
}

if you need more info (value lists?)
*/
export default connect()(ContactForm);

