import React, { Component } from 'react';

class MediaPreview extends Component {

  render() {
    const { photo, header, mediaCount } = this.props;
    const ad = this.props.ad;

    return (
      <div className="card__media">
        <div className="card__photo">
          <img alt={header} src={photo}/>
        </div>
        <div className="card__media-count">
          <i className="icon-camera"></i>
          1/{ mediaCount }
        </div>
      </div>
    );
  }
}

export default MediaPreview;
