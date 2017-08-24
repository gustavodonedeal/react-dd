import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdvert } from './reducer';

class Advert extends Component {

    async componentWillMount() {
        const { match, fetchAdvert } = this.props;
        await fetchAdvert(match.params.adId);
    }

    render() {
        return (
            <div>
            <h1>Big car</h1>
            { JSON.stringify(this.props.advert) }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    advert: state
});

const mapDispatchToProps = dispatch => ({
    fetchAdvert: id => fetchAdvert(id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Advert);