const app = function () {
   const url = 'https://restcountries.eu/rest/v2/all';
   makeRequest(url, requestComplete);

  // const countriesButton = document.querySelector('#get-countries');
  // countriesButton.addEventListener('click', function () {
  //   makeRequest(url, requestComplete);
  // });

}

// const populateCountries = function() {
//   const url = 'https://restcountries.eu/rest/v2/all';
//   makeRequest(url, requestComplete);
// }

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('load', callback);
}

const requestComplete = function() {
  if (this.status !== 200) return;
  // gets info stringified
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  populateDropDown(countries);
}

// const populateList = function(countries) {
//   const ul = document.querySelector('#country-list');
//   countries.forEach(function(country) {
//     const li = document.createElement('li');
//     li.innerText = country.name;
//     ul.appendChild(li);
//   });
// }

const populateDropDown = function(countries) {
  const select = document.querySelector('#countries-dropdown');
  countries.forEach(function(country) {
    const option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });
}


document.addEventListener('DOMContentLoaded', app);
