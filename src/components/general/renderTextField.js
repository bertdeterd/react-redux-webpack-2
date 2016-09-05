
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const renderTextField = field => (

    <div className={field.meta.touched && field.meta.error && "has-error has-feedback"} >
        <div>
            <input {...field.input} className="form-control" type={field.type} aria-describedby="inputError2Status"/>
            {field.meta.touched && field.meta.error &&
                <div><span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"/>
                    <span id="inputError2Status" className="sr-only">{field.meta.error}</span></div>}
        </div>
        <Snackbar  open={field.meta.touched && field.meta.error}  message={field.meta.error}  autoHideDuration="4000" />
    </div>
);

export default renderTextField;




