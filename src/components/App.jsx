import React, {PropTypes} from 'react';

import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import { StickyContainer, Sticky } from 'react-sticky';


class App extends React.Component {

     constructor(props, context) {
        super(props, context);

        //this.onTitleChange = this.onTitleChange.bind(this);
        //this.onClickSave = this.onClickSave.bind(this);

    }

      onClickSave(e) {
        console.log(e);
        //TODO howto fire action
    }

    render() {
        return (
            <MuiThemeProvider>
             <div>
            
            <footer className="footer">hallo</footer>
           

               

                    <AppBar onLeftIconButtonTouchTap={this.onClickSave}
                        title="Title"
                        iconElementRight={
                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                }
                                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                >
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help" />
                                <MenuItem primaryText="Sign out" />
                            </IconMenu>
                        }

                        />


                    <p>
                        Header..in app.jsx file
                    </p>
                    {this.props.children}

                </div>

            </MuiThemeProvider>

        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;