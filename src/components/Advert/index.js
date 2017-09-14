import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as advert from './reducer';
import styles from './Advert.css';

class Advert extends Component {
  async componentDidMount() {
    const { match, fetchAdvert, advert } = this.props;
    await fetchAdvert(match.params.adId);
  }

  render() {
    const { header, description } = this.props;
    return (
      <div className={styles.advertContainer}>
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: advert.isLoading(state.activeAdvert),
  header: advert.getHeader(state.activeAdvert),
  description: advert.getDescription(state.activeAdvert)
});

export default connect(mapStateToProps, { fetchAdvert: advert.fetchAdvert })(
  Advert
);
