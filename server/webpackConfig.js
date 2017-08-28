const isDevelopment = process.env.NODE_ENV === 'development';

const getDevelopmentConfig = () => {
  return {
    client: require('../config/client.webpack.config.dev'),
    server: require('../config/server.webpack.config.dev')
  };
};

module.exports = isDevelopment ? getDevelopmentConfig() : null;
