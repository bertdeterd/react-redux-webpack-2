import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';

const CaseTypeLine = ({caseType}) => {
    return (
    <div>{caseType.title}</div>
    );
};


CaseTypeLine.propTypes = {
    caseType: PropTypes.object.isRequired
};

export default CaseTypeLine;