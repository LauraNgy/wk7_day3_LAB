const Countries = require("./models/countries.js");
const SelectView = require("./views/select_view.js");
const CountryInfo = require("./views/country_info.js");

document.addEventListener('DOMContentLoaded', () => {

  const selectDropDown = document.querySelector("#countries");
  const selectView = new SelectView(selectDropDown);
  selectView.bindEvents();

  const countryDiv = document.querySelector("#country");
  const countryInfo = new CountryInfo(countryDiv);
  countryInfo.bindEvents();

  const countries = new Countries()
  countries.bindEvents();

});
