import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as myFormActions from 'redux-form';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
import CaseTypesTable from '../common/CaseTypesTable';
import CaseTypeDetailsForm from './ContactForm';


import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';


const HomePage = props => {

    const _handleSubmit = (e) => {
        props.actions.createCaseType(e);
    };

    const handleRowSelection = (e) => {
        if (e[0] != null) {
            let obj = props.items[e[0]];
            //TODO: naar thunk om ALLE detailgegevens op te halen???? JAAAAA !!!!
            props.formactions.initialize('contact', obj);
        } else {
            props.formactions.initialize('contact', {});
        }
    };

    return (
        <div>

            <Toolbar>

                <ToolbarGroup firstChild>
                    <DropDownMenu >
                        <MenuItem value={1} primaryText="All Broadcasts" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                </ToolbarGroup>

                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <ToolbarSeparator />
                    <RaisedButton onClick={props.actions.getAllCaseTypes} label="Refresh" primary />
                </ToolbarGroup>
            </Toolbar>

            <div>
                <CaseTypesTable caseTypes={props.items} onRowSelection={handleRowSelection} />
                <CaseTypeDetailsForm onSubmit={_handleSubmit}  />
            </div>
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
