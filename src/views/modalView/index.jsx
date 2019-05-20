import React from 'react';
import {connect} from "react-redux";
import './modalView.scss';
import {hideModal} from "../../redux/actions/modalAction";


class ModalView extends React.Component {


  constructor(props){
    super(props);
    this.div = React.createRef();
    this.modalContent = React.createRef();
  }
  state = {isActive: false};



  componentDidMount() {
    this.div.current.classList.add('active');
    this.modalContent.current.classList.add('active');
    this.setState({isActive: true})
  }

  onOverlayClick = event => event.stopPropagation();

  render() {
    const {isActive} = this.state;
    const { closeModal, resetBlankFieldsState } = this.props;
    return (
      <div
        className={`overlay ${isActive ? 'active': ''}`}
        ref={this.div}
        onClick={() => {closeModal(); resetBlankFieldsState()}}
      >

        <div
          className='modal-content'
          ref={this.modalContent}
          onClick={this.onOverlayClick}
        >
          <div className='closeIcon'><i className="fas fa-times close" onClick={() => {closeModal(); resetBlankFieldsState()}}/></div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    console.log('called first');
    return dispatch(hideModal())
  }
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalView)