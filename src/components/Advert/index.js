import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdvert } from './reducer';
import styles from './Advert.css';

class Advert extends Component {
  async componentDidMount() {
    const { match, fetchAdvert, advert } = this.props;
    if (!advert) await fetchAdvert(match.params.adId);
  }

  render() {
    return (
      <div className={styles.advertContainer}>
        <h1>Big car</h1>
        {JSON.stringify(this.props.advert)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  advert: state.activeAdvert.advert
});

export { fetchAdvert };
export default connect(mapStateToProps, { fetchAdvert })(Advert);
