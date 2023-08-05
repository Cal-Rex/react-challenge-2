import React, { Component } from 'react'
import css from '../components/css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    handleSignIn = () => {
        this.setState((prevState) => ({
          isLoggedIn: !prevState.isLoggedIn,
        }));
      };

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {this.state.isLoggedIn ? (
                        <div>
                            <form>
                                <label for="username">Username: </label>
                                <input type="text" name="username"></input>
                                <label for="password">Password: </label>
                                <input type="password" name="password"></input>
                                <button type="submit">submit</button>
                            </form>
                        </div>
                    ) : (
                        <button onClick={this.handleSignIn}>Login</button>
                    )}
        </div>
        )
    }
}

export default NavBarForm