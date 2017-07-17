import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Search extends Component {

  constructor(){
      super();

      // start the state
      this.state = {
        ads: []
      };
  }

  componentDidMount() {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    this.serverRequest = axios.post(`${cors}https://www.donedeal.ie/search/api/v4/find/`, {
        adType: 'forsale',
        max: 30,
        sections: 'cars',
        sort: 'relevance desc',
      }).then((response) => {
        //console.log(response);
        this.setState({
          ads: response.data.ads
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    const injectHTML = (markup) =>{
      return {__html: markup};
    };

    const cards = this.state.ads.map(function(ad, index){

      /**
       * Card Price
       */
      let cardPrice;
      let price;
      let currencySymbolMarkup;
      let adPhoto = (ad.photos && ad.photos.length > 0 ? ad.photos[0].small2 : undefined);
      if(typeof ad.nativeAdParameters === 'undefined'){
        currencySymbolMarkup = (typeof ad.price !== 'undefined' && ad.price !== '') ? (ad.currency === 'GBP' ? '&#163;' : '&#128;') : 'No Price';
        if(ad.wanted === true){
          price = <span>WANTED</span>
        } else{
          price = <span>
              <span dangerouslySetInnerHTML={injectHTML(currencySymbolMarkup)}></span>
            {(typeof ad.price !== 'undefined' && ad.price !== '') ? ad.price : ''}</span>;
        }
        cardPrice = <p className={'card__price' + (ad.wanted === true ? ' card__price--wanted' : '')}>{price}</p>
      }

      return (
        <li className="card-item" key={ad.id}>
          <a href="/ad/16075166" target="_self" className="card__link">
            <div className="card">
              <div className="card__media">
                <div className="card__photo">
                  <img src={adPhoto}/>
                </div>
                <div className="card__media-count">
                  <i className="icon-camera"></i>
                  1/8
                </div>
              </div>
              <div className="card__body">
                <div className="card__body-top">
                  <p className="card__body-title">{ad.header}</p>
                  <ul className="card__body-keyinfo">
                    <li>{ad.age}</li>
                    <li>{ad.county}</li>
                  </ul>
                </div>
                <div className="card__body-lower">
                  {cardPrice}

                  <div className="card__actions">
                    <i className="manual-false-page card-actions__save icon icon-save-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      )
    });
    return (
      <div className="App">
        <h1>Search Results</h1>

        <ul>
          {cards}
        </ul>

      </div>
    );
  }
}

export default Search;
