import React from 'react';
import NavBarComponent from "../../views/navBar";
import ModalComponent from '../modal';
import CribCard from '../crib_card';
import Button from '../button';
import MyProvider from '../context'
import './home.scss'


class App extends React.Component {

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    if(params.get('token')){
      localStorage.setItem('token', params.get('token'));
      this.props.history.push('/')
    }
  }



  render() {
    const { history } = this.props;
    return (
      <MyProvider>
        <div className="App">
          <NavBarComponent/>
          <ModalComponent history={history} />
          <div className='body-container'>
            <div />
            <div className='card-body'>
              <div />
              <div className='card-container'>
                <CribCard />
              </div>
            </div>
            <div className='logic'>
              <Button value='Claim Deposit' className='action' id='claim-deposit'/>
              <Button value='Moving Out' className='action'/>
            </div>
          </div>
        </div>
      </MyProvider>
    );
  }

}

export default App;
