import React from "react";
import { FormValidation } from "calidation";
import QuestionPage from "./questionPge";


export default class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isValid: false
    }
  }
 
  onSubmit = ({ isValid }) => {
    if (isValid) {
      this.setState = {
        isValid: true
      }
    } 
  };

  render() {
    const config = {
      email: {
        isRequired: "Email field is required!",
        isEmail: "Email should be valid!"
      },
      password: {
        isRequired: "Password field required!",
        isMinLength: {
          message: "6 character password",
          length: 6
        }
      }
    };

    return (
      !this.state.isValid ? 
        <FormValidation onSubmit={this.onSubmit.bind(this)} config={config}>
        {({ fields, errors, submitted }) => (
          <div>
            <h2>Login Page</h2>
            <label for="email">Email</label>
            <input name="email" type="email" value={fields.email}/><br/>
            {submitted && <div className="error">{errors.email}</div>}
            <label for="password">Password</label>
            <input name="password" type="password" value={fields.password}/>
            {submitted && <div className="error">{errors.password}</div>}<br/>
            <button>Login</button>
          </div>
        )}
        </FormValidation>
      : <QuestionPage />
    );
  }
}
