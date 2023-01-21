import React from "react";

class LoginPage extends React.Component {

    state = {
        isLoggedIn: false
    }

    handleLogin = () => {
        this.setState( {isLoggedIn: true});
    }

    render () {
        return (
            <div>
                <button onClick={this.handleLogin}>Login Here</button>
            </div>
        )
    }
}

export default LoginPage;