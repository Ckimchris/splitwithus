import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import GitHubButton from './GitHubButton';
import SignUpButton from './SignUpButton';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import UserForm from './UserForm';
import Password from './Password';



export default class Modal extends React.Component {
    state = {
        value: 0
        };

    handleSignUpOpen = () => {
        this.setState({ value: 1 });
    };

    handleLogInOpen = () => {
        this.setState({ value: 2 });
    };

    handleNewUserOpen = () => {
        this.setState({ value: 3 });
    };

    handleClose = () => {
        this.setState({ value: 0});
    };

    render() {
        const actions = [
            <FlatButton
                label="X"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div>
                <a href='/logout'><FlatButton label="Log Out" /></a>            
                <FlatButton label="Sign Up" onClick={this.handleSignUpOpen} />
                <FlatButton label="Log In" onClick={this.handleLogInOpen} />
                <Dialog
                    title={actions}
                    modal={false}
                    open={this.state.value === 1}
                    onRequestClose={this.handleClose}>
                    <a href='/auth/github'><GitHubButton /></a>                    
                    <br/>
                    <RaisedButton label = "Sign Up With Email" onClick={this.handleNewUserOpen} fullWidth={true}/>
                    <hr />
                    <p>Already have an account?<a href={this.state.handleSignSwitch}>Click Here</a></p>
                    <FlatButton label="Next" onClick={this.handleLogInOpen} />
                </Dialog>
                <Dialog
                    title={actions}
                    modal={false}
                    open={this.state.value === 2}
                    onRequestClose={this.handleClose}>
                    <a href='/auth/github'><GitHubButton /></a>                    
                    <hr />
                    <UserForm />
                    <br />
                    <Password />
                    <p>Don't have an account?<a href={this.state.handleSignSwitch}>Click Here</a></p>
                    <FlatButton label="Next" onClick={this.handleSignUpOpen} />
                </Dialog>
                <Dialog
                    title={actions}
                    modal={false}
                    open={this.state.value === 3}
                    onRequestClose={this.handleClose}>
                    <UserForm />
                    <br />
                    <Password />
                </Dialog>
            </div>
        );
    }
}

/*
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import GitHubButton from './GitHubButton';
import IconButton from 'material-ui/IconButton';
import AutoCompleteExampleSimple from './Search';
export default class LogIn extends React.Component {
    state = {
      open: false,
    };
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };
    render() {
      const actions = [
        <FlatButton
          label="X"
          primary={true}
          onClick={this.handleClose}
        />
      ];
  
      return (
        <div>
          <FlatButton label="Log In" onClick={this.handleOpen} />
          <Dialog
            title={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          <GitHubButton />
          <hr/>
          <AutoCompleteExampleSimple />
          <AutoCompleteExampleSimple />
          </Dialog>
        </div>
      );
    }
  }
  */