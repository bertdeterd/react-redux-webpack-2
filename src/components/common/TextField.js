//import React from 'react'; //, {PropTypes}
import TextField from 'material-ui/TextField';

import React, { Component } from 'react';


const renderTextField = ({ input, label, meta: { touched, error } }) => (
  
 
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
  />
);

renderTextField.propTypes = {
    input: React.PropTypes.object,
    label: React.PropTypes.string,
    meta: React.PropTypes.object
};


module.exports = renderTextField;

