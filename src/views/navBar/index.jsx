import React from 'react';
import {connect} from "react-redux";
import {loadModal} from "../../redux/actions/modalAction";
import SearchBar from '../seachBarView'
import './navBar.scss'

class NavBar extends React.Component {

  render() {
    const {openModal} = this.props;

    return (
      <div className='nav-container'>
        <div className='logo'/>
        <div className='search'>
          <SearchBar />
        </div>
        <div className='auth'>
          <div className='sign-up-cont'>
            <span onClick={openModal}>Sign up</span>
          </div>
          <div className='login-cont'>
            <span>Login</span>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(loadModal('signUpModal'))
});

export default connect(null, mapDispatchToProps)(NavBar)