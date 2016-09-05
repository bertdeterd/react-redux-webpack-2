import React from 'react'; //, {PropTypes}
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
import RaisedButton from 'material-ui/RaisedButton';  //importing the default so no {} required 

import TextField   from 'redux-form-material-ui/lib/TextField';  //default import 
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


const style = {

    padding: 20,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block'
};

let ContactForm = (props) => {

    //importing props, handleSubmit is supplied as onSubmit in parent 
    const {submitting, pristine, handleSubmit } = props;

    /*---------------------------------------------------------
      Fixed settings
    ---------------------------------------------------------*/
    const primary = true;

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <legend>Title form</legend>

                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={3} md={5}>
                            <Field style={style} name="title" type="text" component={TextField} hintText="ID" floatingLabelText="Case Type ID"/>
                            <Field style={style} name="id" type="text" component={TextField} hintText="ID2" floatingLabelText="Case Type ID2"/><br/>
                            <div>
                                <RaisedButton primary={primary} label="Opslaan" type="submit" disabled={pristine || submitting}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>

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

