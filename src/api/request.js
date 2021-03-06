const baseRequestParams = () => ({
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
});

const postRequestParams = (jsonParams = {}) => Object.assign({
  method: 'POST',
  body: JSON.stringify(jsonParams)
}, baseRequestParams());

const getRequestParams = () => Object.assign({
  method: 'GET',
}, baseRequestParams());

export { getRequestParams, postRequestParams };