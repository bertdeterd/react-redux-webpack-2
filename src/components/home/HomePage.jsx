import React, {PropTypes} from 'react';
//import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as myActions from '../../actions/caseTypeActions';

class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

    }

    onClickSave(e) {
        //console.log(this.state.course.title);
        //TODO howto fire action
    }


    onTitleChange(event) {
        //const course = this.state.course;
        //course.title = event.target.value;
        //this.setState({course: course});
    }


    caseTypeRow(caseType, index) {
        return <div key={index}>{caseType.title}</div>;
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Pttss</h1>
                {this.props.caseTypes.map(this.caseTypeRow) }
                <p>home page</p>
            </div>
        );
    }
}

HomePage.propTypes = {
    caseTypes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        caseTypes: state.caseTypes//state.courses comes from rootReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(myActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);