const request = require('request');

const breed = process.argv[2]; //cmd line arg name of desired breed
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => { //start with body
  const data = JSON.parse(body);
  const breedFound = data[0];
  if (breedFound) {
    console.log(breedFound.description);
  }
});