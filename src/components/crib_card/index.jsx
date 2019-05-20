import React, {Component, Fragment} from 'react';
import cribData from './crib_data'
import cribImage from '../../assets/images/living room image.jpeg'
import './card.scss';


class Card extends Component {

  renderCards = () => {
    return (
    cribData.map(crib => (
      <div className='card-layout'>
        <div className='crib-picture'>
          <img src={cribImage} alt='cribImage' />
        </div>
        <div className='crib-detail'>House details are contained here</div>
      </div>
    ))
    )
  };
  render() {
    return (
      <Fragment>
        {this.renderCards()}
      </Fragment>
    );
  }
}

export default Card


