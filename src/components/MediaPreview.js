import React, { Component } from 'react';

class MediaPreview extends Component {

  render() {

    const ad = this.props.ad;
    const adPhoto = (ad.photos && ad.photos.length > 0 ? ad.photos[0].small2 : null);

    return (
      <div className="card__media">
        <div className="card__photo">
          <img alt={ad.header} src={adPhoto}/>
        </div>
        <div className="card__media-count">
          <i className="icon-camera"></i>
          1/{ad.mediaCount}
        </div>
      </div>
    );
  }
}

export default MediaPreview;
