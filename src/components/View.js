import React from 'react';
import axios from 'axios';

class AdView extends React.Component {

  constructor() {
    super();

    this.state = {
      ad: {}
    }
  }

  componentDidMount() {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    // TODO change the API
    this.serverRequest = axios.post(`${cors}https://www.donedeal.ie/search/api/v4/find/`, {
        id: this.props.match.params.adId
      }).then((response) => {
        console.log(response);
        this.setState({
          ad: response.data.ad
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <p>AD VIEW DETAIL</p>
      </div>
    )
  }
}

export default AdView;
