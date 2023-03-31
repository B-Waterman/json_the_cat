const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => { //start with body
    if (error) { //request failed ex. typo in url
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      return callback(`${breedName} not found. Please check spelling; if spelling correct, please ensure existence (wishful thinking unsupported at this time)`, null);
    }
    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };