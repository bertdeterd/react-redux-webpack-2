import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myActions from '../../actions/caseTypeActions';
import CaseTypeLine from './CaseTypeLine';

const HomePage = props => {
    const caseTypeLines = renderCaseTypeLines(props.items);
    return (
        <div className="jumbotron">
            <h1>Pttss</h1>
            <button onClick={props.actions.getAllCaseTypes}>Refresh</button>
            {caseTypeLines}
        </div>
    );
};

const renderCaseTypeLines = caseTypes => (
   caseTypes.map(caseType => <CaseTypeLine  key={caseType.id} caseType={caseType} />)
);

const renderCaseTypeLine = caseType => (
    <CaseTypeLine  key={caseType.id} caseType={caseType} />
);

HomePage.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object
};

HomePage.defaultProps = {
    items: []
};

const mapStateToProps = (state, ownProps) => {
  return  { 
      items: state.caseTypes.items 
    } ;
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(myActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
