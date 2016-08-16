import React from 'react'; //, {PropTypes}
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
import RaisedButton from 'material-ui/RaisedButton';  //importing the default so no {} required 

import   TextField   from 'redux-form-material-ui/lib/TextField';  //default import 
//import  { TextField }   from 'redux-form-material-ui';  //default import 

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
//import   from 'material-ui/BottomNavigation';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

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
<Paper  style={{'padding': '2px 1rem 3rem 2rem' }}          zDepth={1}
                rounded>
            <Field name="title" type="text" component={TextField} label="my label" hintText="Name" floatingLabelText="Case Type Name"/><br/>
            <Field name="id" type="text" component={TextField} hintText="ID" floatingLabelText="Case Type ID"/><br/>

            </Paper>
            <div>
                <RaisedButton primary={primary} label="Opslaan" type="submit" disabled={pristine || submitting}/>
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

<footer className="mdl-mega-footer" >
 <RaisedButton primary={primary} label="Opslaan" type="submit" disabled={pristine || submitting}/>
</footer>


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

