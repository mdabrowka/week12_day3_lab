let countries = []

const app = function () {


   const url = 'https://restcountries.eu/rest/v2/all';
   // makeRequest(url, requestComplete);

  // const countriesButton = document.querySelector('#get-countries');
  // countriesButton.addEventListener('click', function () {
  //   makeRequest(url, requestComplete);
  // });

  const countriesInfo = document.querySelector('#countries-dropdown');
  countriesInfo.addEventListener('click', function () {
    makeRequest(url, requestComplete);
  });

  const dropdown = document.querySelector('#countries-dropdown');
  dropdown.addEventListener('change', function () {
    const ul = document.querySelector('#country-info');
    ul.innerHTML = '';
    const singleCountry = countries[this.value];
    displayCountryInfo(singleCountry);
    // console.log(this)


    var jsonString = JSON.stringify(singleCountry);
    localStorage.setItem('country', jsonString);


});

  const jsonString = localStorage.getItem('country')
  const country = JSON.parse(jsonString)
  displayCountryInfo(country);

}
//THIS IS BAD
// const dropdownSelect = function () {
//   let name = getInputValue('#name');
//   let population = getInputValue('#population');
//   let capital = getInputValue('#capital');
//
//   let country = {
//     name: name,
//     population: population,
//     capital: capital
//   };
//
//   setDefinitionText('#name-display', country.name);
//   setDefinitionText('#population-display', country.population);
//   setDefinitionText('#capital-display', country.capital);
//
//   var jsonString = JSON.stringify(country);
//   localStorage.setItem('country', jsonString);
// }

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
  countries = JSON.parse(jsonString);
  // populateList(countries)
  populateDropDown(countries);
  // displayCountryInfo(countries)
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
  countries.forEach(function(country, index) {
    const option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  });
}

const displayCountryInfo = function(country) {
  const ul = document.querySelector('#country-info');

      const liName = document.createElement('li');
      liName.innerText = country.name;
      const liPopulation = document.createElement('li');
      liPopulation.innerText = country.population;
      const liCapital = document.createElement('li');
      liCapital.innerText = country.capital;
      ul.appendChild(liName);
      ul.appendChild(liPopulation);
      ul.appendChild(liCapital);


}


document.addEventListener('DOMContentLoaded', app);
