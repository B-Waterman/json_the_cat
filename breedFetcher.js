const request = require('request');

const breed = process.argv[2]; //cmd line arg name of desired breed
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => { //start with body
  if (error) { //request failed ex. typo in url
    console.log("Error: request failed", error);
  }
  const data = JSON.parse(body);
  const breedFound = data[0];
  if (!breedFound) {
    return console.log(`${breed} not found. Please check spelling; if spelling correct, please ensure existence (wishful thinking unsupported at this time)`);
  } console.log(breedFound.description);
});