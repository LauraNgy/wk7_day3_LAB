const PubSub = require('../helpers/pub_sub.js');
const Request = require("../helpers/request.js");

const Countries = function () {
  this.countries = null;
};

Countries.prototype.getData = function () {
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
    this.countries = data;
    PubSub.publish("Countries:all-countries", this.countries);
  })
};

Countries.prototype.bindEvents = function () {
  this.getData();
  PubSub.subscribe("SelectView:selected-country", (event) => {
    const countryId = event.detail;
    const country = this.countries[countryId]
    PubSub.publish("Countries:country-detail", country);
  });
};

module.exports = Countries;
