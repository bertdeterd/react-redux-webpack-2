import React from 'react'; //, {PropTypes}
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
import RaisedButton from 'material-ui/RaisedButton';  //importing the default so no {} required 

import TextField from 'redux-form-material-ui/lib/TextField';  //default import 
//import  { TextField }   from 'redux-form-material-ui';  //default import 

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
//import   from 'material-ui/BottomNavigation';

import { Grid, Row, Col } from 'react-bootstrap';
//import Paper from 'material-ui/Paper';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

import {orange500, blue500} from 'material-ui/styles/colors';
import validate from '../../validations/contact';
import renderTextField from '../general/renderTextField';

const style = {

    margin: 10,
    display: 'inline-block'
};
//   <Field   name="title" type="text" component={TextField} hintText="ID" floatingLabelText="Case Type ID"/>

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: blue500,
    },
    floatingLabelFocusStyle: {
        color: orange500,
    },
};



let ContactForm = (props) => {

    //importing props, handleSubmit is supplied as onSubmit in parent 
    const {submitting, pristine, handleSubmit } = props;

    /*---------------------------------------------------------
      Fixed settings
    ---------------------------------------------------------*/
    const primary = true;

    return (
        <div className="container-fluid">

            <form onSubmit={handleSubmit}  >

                <div className="row">
                    <div className="form-group">

                        <div className="col-sm-3">
                            <Field id="id" name="id" type="text"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                floatingLabelText="Case ID"
                                component={TextField}/>
                        </div>
                        <div className="col-sm-6">
                            <Field name="title" type="text"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                component={TextField}
                                floatingLabelText="Case Title"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <RaisedButton primary={primary} label="Opslaan" type="submit" disabled={pristine || submitting}/>
                    </div>
                </div>

            </form>









            <BottomNavigation>
                <BottomNavigationItem
                    label="Recents"
                    icon={recentsIcon}

                    />
                <BottomNavigationItem
                    label="Favorites"
                    icon={favoritesIcon}

                    />

            </BottomNavigation>




        </div>
    );
};

ContactForm.propTypes = {
    handleSubmit: React.PropTypes.func,
    pristine: React.PropTypes.bool,
    submitting: React.PropTypes.bool,
    actions: React.PropTypes.object//,//,
};

ContactForm = reduxForm({
    form: 'contact',
    validate                 // <--- validation function given to redux-form!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
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

