const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => { //start with body
    
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  })

};

console.log(typeof body);