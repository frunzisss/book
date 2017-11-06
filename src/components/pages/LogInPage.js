import React from 'react';
import LoginForm from './../forms/LogInForm';

class LogInPage extends React.Component {
    submit = data => {
        console.log(data);
    }

    render() {
        return (
            <div>
            <h1>LogInPage</h1>
           
            <LoginForm submit={this.submit} />
        </div>
        );
    }
}

export default LogInPage