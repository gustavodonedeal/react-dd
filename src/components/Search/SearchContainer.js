import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = state => ({
  results: [1, 2, 3]
});

export default connect(mapStateToProps)(Search);
