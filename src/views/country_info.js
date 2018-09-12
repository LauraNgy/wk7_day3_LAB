const PubSub = require('../helpers/pub_sub.js');
const Request = require("../helpers/request.js");
const CreateAppend = require("../helpers/create_append.js");

const CountryInfo = function (element) {
  this.element = element
}

CountryInfo.prototype.bindEvents = function () {
  PubSub.subscribe("Countries:country-detail", (event) => {
    const parent = this.element;
    this.element.innerHTML = "";
    const country = event.detail;
    const countryName = new CreateAppend("h2", country.name, parent)
    const countryRegion = new CreateAppend("h3", country.region, parent)
    const countryFlag = new Image(200, 150)
    countryFlag.src = country.flag
    parent.appendChild(countryFlag);
    const countryUl = new CreateAppend("ul", "", parent);
    const countryLanguages = country.languages;
    countryLanguages.forEach((language) => {
      const countryLanguage = new CreateAppend("li", language.name, countryUl)
    })
    // console.log(country.languages);
  });
};

module.exports = CountryInfo;
