'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  // on button click of 'GET FORTUNE" 
  // select random fortune from FORTUNES list in server.py
  // stop default
  // run the function out of server,py and put it in #fortune-text div 
  
  
  fetch('/fortune')
    .then(response => response.text())
    .then(serverData => {
      document.querySelector('#fortune-text').innerHTML = serverData;
    })

}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  //const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  fetch(`/weather.json?zipcode=${zipcode}`)
    .then(response => response.json())
    .then((jsonData) => {
      document.querySelector('#weather-info').innerHTML = jsonData.forecast;
    });
  
//  document.querySelector('#weather-info').innerText = weather[forecast] // fetch from 'weather.json'

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
