import { Component } from 'react';
import './Siign.scss';


class Sign extends Component {

    state = {
        email: '',
        password: ''
    }
    render() {
        return (
            <div className = "sing-in">
                <h2>Have account?</h2>
                <span>Sign in</span>
                <input name = "email" type="email"  value = {this.state.email}/>
                <label>Email:</label>
                <input name = "password" type="text"  value = {this.state.password}/>
                <label>Password:</label>
            </div>
        )
    }

}
export default Sign;