import React, {PropTypes} from 'react';
//import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as myFormActions from 'redux-form';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
//import CaseTypeLine from './CaseTypeLine';
import CaseTypesTable from '../common/CaseTypesTable';
import ContactForm from './ContactForm';

const HomePage = props => {

    const _handleSubmit = (e) => {
        props.actions.createCaseType(e);
    };

    const handleRowSelection = (e) => {
        if (e[0] != null) {
            let obj = props.items[e[0]];

            //TODO: naar thunk om ALLE detailgegevens op te halen???? JAAAAA !!!!

            props.formactions.initialize('contact', obj);
        }
    };

    return (
        <div className="jumbotron">
            <h1>Demo List</h1>
            <button onClick={props.actions.getAllCaseTypes}>Refresh</button>
            <CaseTypesTable caseTypes={props.items} onRowSelection={handleRowSelection} />
            <ContactForm onSubmit={_handleSubmit}  />
        </div>
    );
};

HomePage.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object,
    formactions: PropTypes.object,
    selectedItem: PropTypes.object,
    dispatch: PropTypes.func
};

HomePage.defaultProps = {
    items: [],
    selectedItem: {}
};

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.caseTypes.items,
        selectedItem: state.caseTypes.selected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(myActions, dispatch),
        formactions: bindActionCreators(myFormActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
