import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core';


const styles = {};

class Login extends Component {

    state = {
        username: '',
        passsword: '',
        submitting: false
    };

  render() {
    return (
        <form>
        <div >
          <TextField
            label="Username"
          />
          <TextField
            label="Password"
          />
          <Button variant="raised">Login</Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(Login);