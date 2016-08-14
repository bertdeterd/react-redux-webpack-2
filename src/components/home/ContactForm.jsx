import React from 'react'; //, {PropTypes}
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
import RaisedButton from 'material-ui/RaisedButton';

//import TextField from 'material-ui/TextField';



//
import { TextField } from 'redux-form-material-ui'; //'redux-form-material-ui';


let ContactForm = (props) => {

    //importing props, handleSubmit is supplied as onSubmit in parent 
    const {submitting, pristine, handleSubmit } = props; 

    /*---------------------------------------------------------
      Fixed settings
    ---------------------------------------------------------*/
    const primary = true;

    return (
        <form onSubmit={handleSubmit}>
            <Field name="title" type="text" component="input" placeholder="Case Title"/><br/>
            <Field name="id" type="text" component="input" placeholder="Email"/>
            <div>
                <RaisedButton primary={primary} label="Opslaan" type="submit" disabled={pristine || submitting}/>
            </div>
        </form>
    );
};

ContactForm.propTypes = {
    handleSubmit: React.PropTypes.func,
    pristine: React.PropTypes.bool,
    submitting: React.PropTypes.bool,
    actions: React.PropTypes.object//,//,
    //initialize: PropTypes.func
    //selected: PropTypes.object
};

ContactForm = reduxForm({
    form: 'contact'  
    //validate                 // <--- validation function given to redux-form
})(ContactForm);


/*
function mapStateToProps(state, ownProps) {
    return {
        //initialValues: state.caseTypes.selected,
        //caseTypes: state.caseTypes//, //state.courses comes from rootReducer
        selected: setSelected(state.caseTypes.selected)
    };
}
*/
//if you need more info (value lists?)

export default connect()(ContactForm);

