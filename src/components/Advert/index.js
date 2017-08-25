import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdvert } from "./reducer";

class Advert extends Component {
  static getData(id) {
    return fetchAdvert(id);
  }

  async componentWillMount() {
    const { match, fetchAdvert } = this.props;
    await fetchAdvert(match.params.adId);
  }

  render() {
    return (
      <div>
        <h1>Big car</h1>
        {JSON.stringify(this.props.advert)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  advert: state
});

export { fetchAdvert };
export default connect(mapStateToProps, { fetchAdvert })(Advert);
