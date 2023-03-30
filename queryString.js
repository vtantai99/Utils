const queryString = Object.keys(params).map(function(key) {
  return key + '=' + params[key]
}).join('&');

const queryStringWithEnCode = Object.keys(params).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');

// To easier if use package: query-string =))