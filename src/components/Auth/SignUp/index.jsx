import React, {Fragment} from 'react';
import {connect} from "react-redux";
import Modal from '../../../views/modalView';
import {signUpRequest} from "../../../redux/actions/authAction";
import Button from '../../button';
import LabelInput from '../../forms';
import {FormContext} from '../../context'
import './signUp.scss';

const { Consumer } = FormContext;
class SignUpModal extends React.Component {

  socialAuth = event => {
    window.location = `http://localhost:7000/auth/login/${event.target.id}`;
  };

  generateForm = (label, type, name) => (
      <Fragment>
        <LabelInput
          inputClass='input'
          inputType={type}
          inputName={name}
          labelName={label}/>
      </Fragment>
  );



  render() {
    const {signUp} = this.props;
    return (
      <Consumer>
        {(context) => {
          const { state: { hasBlankFields }} = context;
          const { resetBlankFields, checkBlankFields, state: {values: {auth}, error}} = context;

          const wrapperFunction = event => {
            event.preventDefault();
            checkBlankFields();

          };

          return (
          <Modal resetBlankFieldsState={() => resetBlankFields()}>
            <div className='modal-header'>
              <div className='title'>Join Today</div>
              <div className='sub-title'>Choose one of the following sign up methods</div>
            </div>
            <div className="social-button">
              <Button value="Facebook" className="social facebook" icon="fab fa-facebook-f" onClick={this.socialAuth}
                      id='facebook'/>
              <Button value="Google" className="social google" icon="fab fa-google" onClick={this.socialAuth}
                      id='google'/>
              <Button value="Twitter" className="social twitter" icon="fab fa-twitter"/>
            </div>
            <div className="alt-registration">
              <span className="registration-title">Or sign up using your email address</span>
              <div className="form-container">
                <form>
                  {this.generateForm('Username', 'text', 'username')}
                  {this.generateForm('Email', 'text', 'email')}
                  {this.generateForm('Password', 'password', 'password')}
                  <Button
                    className="sign-up-button"
                    value="Create My Account"
                    onClick={wrapperFunction}/>
                </form>
              </div>
            </div>
          </Modal>
          )
        }}
      </Consumer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (state) => dispatch(signUpRequest(state))
});

export default connect(null, mapDispatchToProps)(SignUpModal);