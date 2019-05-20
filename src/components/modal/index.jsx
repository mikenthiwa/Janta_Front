import React, {Fragment, Component} from 'react';
import {connect} from "react-redux";
import SignUpModal from '../Auth/SignUp';



class Modal extends Component {

  renderSpecificModal = () => {
    const {modalType} = this.props;
    const modals = {
      "signUpModal": SignUpModal
    };
    if(modalType){
      const SpecificModal = modals[modalType];
      return(<SpecificModal history={this.props.history}/>)
    }
  };

  render() {
    return (
      <Fragment>
        {this.renderSpecificModal()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

export default connect(mapStateToProps)(Modal);