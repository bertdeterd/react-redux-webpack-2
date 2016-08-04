import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {bindActionCreators} from 'redux';
//import * as myActions from '../../actions/caseTypeActions';

const CaseTypesTable = props => {

    /*---------------------------------------------------------
    Fixed settings
    ---------------------------------------------------------*/
    const deselectOnClickaway = false;


    /*---------------------------------------------------------
       UI
    ---------------------------------------------------------*/
    return (
        <Table onRowSelection={props.onRowSelection} >
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody deselectOnClickaway={deselectOnClickaway}>

                {props.caseTypes.map((row, index) => (
                    <TableRow key={index}>
                        <TableRowColumn>{row.id}</TableRowColumn>
                        <TableRowColumn>{row.title}</TableRowColumn>
                    </TableRow>
                )) }
            </TableBody>
        </Table>
    );
};

CaseTypesTable.propTypes = {
    caseTypes: PropTypes.array.isRequired,
    //actions: PropTypes.object,
    onRowSelection: PropTypes.func
};

CaseTypesTable.defaultProps = {
    caseTypes: []
};

export default CaseTypesTable;